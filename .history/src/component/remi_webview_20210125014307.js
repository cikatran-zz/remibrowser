import React, {useEffect, useState} from 'react';
import {Dimensions, RefreshControl, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  view: {flex: 1, height: '100%'},
});

export default function RemiWebview({onRef, ...webViewProps}) {
  const [height, setHeight] = useState(Dimensions.get('screen').height);
  const [isEnabled, setEnabled] = useState();
  const [isLoading, setLoading] = useState(false);

  let webView;
  const setWebViewRef = (webviewref) => {
    webView = webviewref;
  };
  useEffect(() => {
    onRef(webView);
  }, []);

  const onRefresh = () => webView.reload();
  return (
    <ScrollView
      onLayout={(e) => setHeight(e.nativeEvent.layout.height)}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={isLoading}
          enabled={isEnabled}
        />
      }
      style={styles.view}>
      <WebView
        {...webViewProps}
        ref={setWebViewRef}
        onNavigationStateChange={(navState) => {
          // Keep track of going back navigation within component
          setLoading(navState.loading);
        }}
        onScroll={(e) => setEnabled(e.nativeEvent.contentOffset.y === 0)}
        style={[styles.view, {height}, webViewProps.style]}
      />
    </ScrollView>
  );
}
