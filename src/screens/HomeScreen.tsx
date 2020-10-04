import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import { ThemeStore } from '../stores/theme-store/theme-store';
import { ITheme } from '../stores/theme-store/themes/themes';
import { jsonClient } from "../api/JsonPlaceholderAPI";
import IPost from "../models/IPost";

const Text = styled.Text`
  color: ${(props: { theme: ITheme }) => props.theme.PRIMARY_TEXT_COLOR};
`;

const Container = styled.SafeAreaView`
  background-color: ${(props: { theme: ITheme }) =>
  props.theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
`;

const Button = styled.TouchableOpacity`
  margin: 15px 10px;
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

const Card = styled.View`
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
  justify-content: space-between;
`;

const HomeScreen = (props: any) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const theme = useSelector((state: any) => state.theme);

  useEffect(() => {
    jsonClient.getPosts().then((result) => {
      setPosts(result.data);
      // console.warn(result);
    });
  }, []);

  return (
      <Container>
        <Button
          onPress={() => {
            ThemeStore.dispatch({ type: 'CHANGE_THEME' });
          }}>
          <ButtonText>Change theme</ButtonText>
        </Button>
        <FlatList keyExtractor={(post, index) => `${post.title}-${index}`} data={posts}
                  renderItem={({ item }) =>
                    <Card>
                      <ViewSpaced>
                        <CardTitle>
                          {item.title.substring(0, 22) + (item.title.length > 22 ? '...' : '')}
                        </CardTitle>
                        <CardText>{`ID:${item.id}`}</CardText>
                      </ViewSpaced>
                      <CardText>
                        {item.body.substring(0, 100) + (item.body.length > 100 ? '...' : '')}
                      </CardText>
                    </Card>
                  }/>
      </Container>
  );
};

export default HomeScreen;

//
// const mapStateToProps = (state: any) => {
//   return {
//     posts: state.theme
//   }
// }
// export default connect(mapStateToProps)(HomeScreen)
