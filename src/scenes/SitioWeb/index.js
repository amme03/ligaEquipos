import React, { Component } from 'react';
import { View,  WebView, StyleSheet,Text  } from 'react-native';

export default class SitioWeb extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    var ips='https://'+this.props.navigation.getParam('strFacebook', '') ;
    return (
      <View style = {styles.container}>
      
         <WebView
         source = {{ uri:ips }}
         />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
     height: 550,
  }
})