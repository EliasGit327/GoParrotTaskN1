import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { ITheme } from '../../redux/reducers/theme/themes/themes';
import { jsonClient } from "../../api/JsonPlaceholderAPI";
import IPost from "../../models/IPost";
import rootStore from "../../redux/root-store";
import AsyncStorage from '@react-native-community/async-storage';

const VerticalSpacer = styled.View`
  margin-bottom: 10px;
`;

const Container = styled.SafeAreaView`
  background-color: ${(props: { theme: ITheme }) =>
  props.theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  margin: 15px 15px 0 15px;
  background-color: ${(props: { theme: ITheme }) =>
  props.theme.PRIMARY_BUTTON_COLOR};
  border-color: ${(props: { theme: ITheme }) => props.theme.PRIMARY_TEXT_COLOR};
  padding: 16px 32px;
  border-radius: 6px;
`;

const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: ${(props: { theme: ITheme }) => props.theme.PRIMARY_BUTTON_TEXT_COLOR}; ;
`;

const Card = styled.TouchableOpacity`
  margin: 15px 15px 0 15px;
  padding: 15px;
  background-color: ${(props: { theme: ITheme }) => props.theme.CARD_BACKGROUND_COLOR}; ;;
`;

const CardTitle = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: ${(props: { theme: ITheme }) => props.theme.PRIMARY_TEXT_COLOR};
`;

const CardText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: ${(props: { theme: ITheme }) => props.theme.PRIMARY_TEXT_COLOR};
  color: ${(props: { theme: ITheme }) => props.theme.PRIMARY_TEXT_COLOR};
`;

const ViewSpaced = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

const Pin = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 50px;
  background-color: ${(props: { theme: ITheme }) => props.theme.PRIMARY_BUTTON_COLOR};
`;

const WrapperForPin = styled.View`
  margin-bottom: 5px;
  margin-right: 5px;
`;

interface IProps {
  navigation: any;
  changeTheme: () => {},
  setPosts: (posts: IPost[]) => {},
  posts: IPost[];
  pinned: number[];
}

const HomeScreen = (props: IProps) => {

  useEffect(() => {
    getPinned().then((r: []) => {
      rootStore.dispatch({ type: 'PIN_POSTS', payload: r });
    });

    jsonClient.getPosts().then((result) => {
      rootStore.dispatch({ type: 'SET_POSTS', payload: result.data });
      rootStore.dispatch({ type: 'SORT_POSTS'});
    });
  }, []);

  return (
    <Container>
      <Button
        onPress={() => {
          rootStore.dispatch({ type: 'CHANGE_THEME' });
        }}>
        <ButtonText>Change theme</ButtonText>
      </Button>
      <Button
        onPress={() => {
          rootStore.dispatch({ type: 'UNPIN_ALL_POSTS' });
          jsonClient.getPosts().then((result) => {
            rootStore.dispatch({ type: 'SET_POSTS', payload: result.data });
          });
        }}>
        <ButtonText>Reset</ButtonText>
      </Button>
      <VerticalSpacer/>
      <FlatList keyExtractor={(post, index) => `${post.title}-${index}`} data={props.posts}
                renderItem={({ item }) =>
                  <Card onPress={() => {
                    props.navigation.navigate('Post', { id: item.id });
                  }}>
                    <ViewSpaced>
                      <CardTitle>
                        {
                          props.pinned.includes(item.id) ? <WrapperForPin><Pin/></WrapperForPin> : null
                        }
                        {item?.title.substring(0, 20) + (item.title.length > 20 ? '...' : '')}
                      </CardTitle>
                      <CardText>{`ID:${item?.id}`}</CardText>
                    </ViewSpaced>
                    <CardText>
                      {item.body.substring(0, 100) + (item?.body.length > 100 ? '...' : '')}
                    </CardText>
                  </Card>
                }/>
    </Container>
  );
};

const mapStateToProps = (store: any) => {
  return {
    theme: store.themeReducer.theme,
    posts: store.postsReducer.posts,
    pinned: store.postsReducer.pinned
  };
}

export default connect(mapStateToProps)(HomeScreen);

const getPinned = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('pinned')
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch(e) {}
}

