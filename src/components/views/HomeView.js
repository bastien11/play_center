import React from 'react';
import {
    StyleSheet,
    StatusBar,
    AsyncStorage,
    Image
} from 'react-native';

import {Container, Content, Text, Header, Body, Left, Right, Button, View, Card} from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from "../../../assets/styles/main";

export default class HomeView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pseudo: ''
        }

        this.handle2048 = this.handle2048.bind(this);
        this.getInfosUser = this.getInfosUser.bind(this);
    }

    componentDidMount(){
        this.getInfosUser()
    }

    handle2048(){
        Actions.push('ZokooView')
    }

    getInfosUser() {
        AsyncStorage.getItem("PSEUDO").then((infos) => {
            this.setState({
                pseudo: infos,
            })
        });

    }

    render(){
        return (
            <Content>
                <Content>
                    <Body style={[{flex: 1, justifyContent: 'center'}]}>
                    <Text style={[styles.title_size, {alignItems: 'center', textAlign: 'center'}]}>Bienvenue {this.state.pseudo} sur la plateforme de jeu Play Center !</Text>
                    </Body>
                </Content>
                <Content>
                    <Content style={{flex: 1}}>
                        <View style={[{flexDirection: 'row'}]}>
                            <Image source={require('../../../assets/images/2048.jpg')}/>
                            <Button large
                                    onPress={this.handle2048}
                                    style={[styles.button, {alignItems: 'center'}]}>
                                <Text>2048</Text>
                            </Button>
                        </View>

                        <View>
                        <Button large
                                style={styles.button}>
                            <Text>Taquin</Text>
                        </Button>
                        </View>
                        <Button large
                                style={styles.button}>
                            <Text>Tetris</Text>
                        </Button>
                    </Content>
                </Content>
            </Content>
        )
    }
}

const s = StyleSheet.create({

});