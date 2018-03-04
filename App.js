import React from 'react';
import {
    Router,
    Scene,
}from 'react-native-router-flux';

import LoginView from "./src/components/views/LoginView";
import HomeView from "./src/components/views/HomeView";
import List2048 from "./src/components/views/2048/List2048";
import ListTaquin from "./src/components/views/taquin/ListTaquin";
import ListTetris from "./src/components/views/tetris/ListTetris";
import ListDemineur from "./src/components/views/demineur/ListDemineur";
import ListSnake from "./src/components/views/snake/ListSnake";

export default class App extends React.Component {
  render() {
    return (
        <Router>
            <Scene key={'root'}>
                <Scene
                    component={LoginView}
                    //initial={true}
                    key={'LoginView'}
                    title={'Connexion'}
                />
                <Scene
                    component={HomeView}
                    initial={true}
                    key={'HomeView'}
                    title={'Acceuil'}
                />
                <Scene
                    component={List2048}
                    //initial={true}
                    key={'List2048'}
                    title={'2048'}
                />
                <Scene
                    component={ListTaquin}
                    //initial={true}
                    key={'ListTaquin'}
                    title={'Taquin'}
                />
                <Scene
                    component={ListTetris}
                    //initial={true}
                    key={'ListTetris'}
                    title={'Tetris'}
                />
                <Scene
                    component={ListDemineur}
                    //initial={true}
                    key={'ListDemineur'}
                    title={'demineur'}
                />
                <Scene
                    component={ListSnake}
                    //initial={true}
                    key={'ListSnake'}
                    title={'Snake'}
                />

            </Scene>
        </Router>
    );
  }
}
