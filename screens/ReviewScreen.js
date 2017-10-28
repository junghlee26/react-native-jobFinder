import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements'

class ReviewScreen extends Component {
  // static navigationOptions = {
  //   title: 'Review Jobs',
  //   header: ({ navigation }) => {
  //     return {
  //       right: <Button title="Settings" onPress={() => navigation.navigate("settings")} />
  //     };
  //   }
  // }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Jobs',
      headerStyle: {marginTop: Platform.OS === 'android' ? 24 : 0},
      headerRight: (
        <Button
          title="Settings"
          onPress={() => navigation.navigate('settings')}
          backgroundColor='transparent'
          color='rgba(0, 122, 255, 1)'
        />
      )
    }
  }
  
  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;