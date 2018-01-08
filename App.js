import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    Router,
    Scene,
}from 'react-native-router-flux';

import LoginView from "./src/components/views/LoginView";
import HomeView from "./src/components/views/HomeView";

export default class App extends React.Component {
  render() {
    return (
        <Router>
            <Scene key={'root'}>
                <Scene
                    component={LoginView}
                    initial={true}
                    key={'LoginView'}
                    title={'Login View'}
                />
                <Scene
                    component={HomeView}
                    //initial={true}
                    key={'HomeView'}
                    title={'Home View'}
                />
            </Scene>
        </Router>
    );
  }
}
