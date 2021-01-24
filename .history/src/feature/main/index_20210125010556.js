import React, {useRef} from 'react';
import {SafeAreaView, View} from 'react-native';
import RemiWebview from '../../component/remi_webview';
import RemiWebviewToolbar from '../../component/remi_webview_toolbar';

export default function MainScreen({isRefresh, onRefresh, ...webviewProps}) {
  const webviewRef = useRef(null);

  const loadLink = (link) => {
    webviewRef.current.load(link);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <RemiWebviewToolbar onEnterLink={loadLink} />
        <RemiWebview
          onRef={(callback) => {
            webviewRef.current = callback;
          }}
          source={{uri: 'https://remitano.com'}}
          style={{flex: 1}}
        />
      </View>
    </SafeAreaView>
  );
}
