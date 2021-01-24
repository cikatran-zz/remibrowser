import React, {useRef, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import RemiWebview from '../../component/remi_webview';
import RemiWebviewToolbar from '../../component/remi_webview_toolbar';
import {linkHandle} from '../../util/link_helper';

export default function MainScreen({isRefresh, onRefresh, ...webviewProps}) {
  const webviewRef = useRef(null);
  const [url, setUrl] = useState('https://remitano.com');

  const loadLink = (link) => {
    setUrl(linkHandle(link));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <RemiWebviewToolbar
          canGoBack={webviewRef.canGoBack}
          canGoForward={webviewRef.canGoForward}
          onGoBack={() => webviewRef.goBack()}
          onGoForward={() => webviewRef.goForward()}
          onEnterLink={loadLink}
        />
        <RemiWebview
          onRef={(callback) => {
            webviewRef.current = callback;
          }}
          source={{uri: url}}
          style={{flex: 1}}
        />
      </View>
    </SafeAreaView>
  );
}
