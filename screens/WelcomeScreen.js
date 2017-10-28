import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'JobFinder', color: '#03A9F4' },
  { text: 'Easy to find, apply jobs', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F3' }
];

class WelcomeScreen extends Component {
  //navigation props is passed via App.js
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;