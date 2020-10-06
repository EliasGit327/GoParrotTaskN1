import React from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
import styled from "styled-components/native";
import { ITheme } from "../redux/reducers/theme/themes/themes";
import { connect } from "react-redux";
import rootStore from "../redux/root-store";

const Container = styled.SafeAreaView`
  background-color: ${(props: { theme: ITheme }) =>
  props.theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
`;


interface IProps {
  navigation: any;
  route: any;
  pinned: number[];
}

const PostScreen = (props: IProps) => {
  const { id } = props.route.params;
  const redirectPostMessage = `(function() {
            window.addEventListener("message", function (event) {
                window.ReactNativeWebView.postMessage(JSON.stringify(event.data));
            });
        })();`;

  return (
    <>
      <Container>
        <WebView source={{ uri: `http://localhost:3000/posts/${id}` }}
                 injectedJavaScript={redirectPostMessage}
                 onMessage={(event) => {
                   const data = JSON.parse(event.nativeEvent.data);
                   if (data.message === 'pin') {
                     if (!props.pinned.includes(id)) {
                       rootStore.dispatch({ type: 'PIN_POST', payload: id })
                       props.navigation.goBack();
                     }
                   }
                   if (data.message === 'unpin') {
                     if (props.pinned.includes(id)) {
                       rootStore.dispatch({ type: 'UNPIN_POST', payload: id })
                       props.navigation.goBack();
                     }
                   }
                 }}/>
      </Container>
    </>
  );
};

const mapStateToProps = (store: any) => {
  return {
    theme: store.themeReducer.theme,
    posts: store.postsReducer.posts,
    pinned: store.postsReducer.pinned
  };
}

export default connect(mapStateToProps)(PostScreen);

