import React from 'react';
import {
    Router,
    Scene,
}from 'react-native-router-flux';

import LoginView from "./src/components/views/LoginView";
import HomeView from "./src/components/views/HomeView";
import ZokooView from "./src/components/views/ZokooView";
import test from "./src/components/views/2048/src/test";

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
                <Scene
                    component={ZokooView}
                    //initial={true}
                    key={'ZokooView'}
                    title={'2048'}
                />
                <Scene
                    component={test}
                    key={'test'}
                    title={'test'}
                />

            </Scene>
        </Router>
    );
  }
}
