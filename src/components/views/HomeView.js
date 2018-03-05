import React from 'react';
import {
    StyleSheet,
    StatusBar,
    AsyncStorage,
    Image, Alert
} from 'react-native';

import {
    Container, Content, Text, Header, Body, Left, Right, Button, View, Card, CardItem,
    Thumbnail, Label
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import styles from "../../../assets/styles/main";

export default class HomeView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pseudo: '',
            mail: '',
            s_2048: 0,
            s_taquin: 0,
            s_tetris: 0,
            s_snake: 0,
            s_demineur: 0
        };

        this.handle2048 = this.handle2048.bind(this);
        this.handleDemineur = this.handleDemineur.bind(this);
        this.handleSnake = this.handleSnake.bind(this);
        this.handleTaquin = this.handleTaquin.bind(this);
        this.handleTetris = this.handleTetris.bind(this);

        this.getInfosUser = this.getInfosUser.bind(this);
        this.getScore2048 = this.getScore2048.bind(this);
        this.getScoreDemineur = this.getScoreDemineur.bind(this);
        this.getScoreSnake = this.getScoreSnake.bind(this);
        this.getScoreTaquin = this.getScoreTaquin.bind(this);
        this.getScoreTetris = this.getScoreTetris.bind(this);
    }

    componentDidMount(){
        this.getInfosUser();
        this.getScore2048();
        this.getScoreDemineur();
        this.getScoreSnake();
        this.getScoreTaquin();
        this.getScoreTetris();
    }

    handle2048(){
        Actions.push('List2048')
    }

    handleTetris(){
        Actions.push('ListTetris')
    }

    handleTaquin(){
        Actions.push('ListTaquin')
    }

    handleDemineur(){
        Actions.push('ListDemineur')
    }

    handleSnake(){
        Actions.push('ListSnake')
    }

    getInfosUser() {
        AsyncStorage.multiGet(["PSEUDO", "MAIL"]).then((infos) => {
            console.log(infos[1][1])
            this.setState({
                pseudo: infos[0][1],
                mail: [1][1]
            })
        });

    }

    getScore2048(){
        let base64 = require('base-64');

        let username = "PlayCenter";
        let password = "azerty";
        let url = 'http://ygg.life/dev/PlayCenter/requete.php';
        //headers.append('Content-Type', 'application/json');
        fetch('http://ygg.life/dev/PlayCenter/requete.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic '+ base64.encode(username + ":" + password),
                //'Credentials': 'unsername:password'
            },
            body: 'action=requete&subaction=get_2048&mail='+this.state.mail

        })
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
    }

    getScoreTaquin(){
        let base64 = require('base-64');

        let username = "PlayCenter";
        let password = "azerty";
        let url = 'http://ygg.life/dev/PlayCenter/requete.php';
        //headers.append('Content-Type', 'application/json');

        fetch('http://ygg.life/dev/PlayCenter/requete.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic '+ base64.encode(username + ":" + password),
                //'Credentials': 'unsername:password'
            },
            body: 'action=requete&subaction=get_taquin&mail='+this.state.mail

        })
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
    }

    getScoreTetris(){
        let base64 = require('base-64');

        let username = "PlayCenter";
        let password = "azerty";
        let url = 'http://ygg.life/dev/PlayCenter/requete.php';
        //headers.append('Content-Type', 'application/json');

        fetch('http://ygg.life/dev/PlayCenter/requete.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic '+ base64.encode(username + ":" + password),
                //'Credentials': 'unsername:password'
            },
            body: 'action=requete&subaction=get_tetris&mail='+this.state.mail

        })
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
    }

    getScoreSnake(){
        let base64 = require('base-64');

        let username = "PlayCenter";
        let password = "azerty";
        let url = 'http://ygg.life/dev/PlayCenter/requete.php';
        //headers.append('Content-Type', 'application/json');

        fetch('http://ygg.life/dev/PlayCenter/requete.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic '+ base64.encode(username + ":" + password),
                //'Credentials': 'unsername:password'
            },
            body: 'action=requete&subaction=get_snake&mail='+this.state.mail

        })
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
    }

    getScoreDemineur(){
        let base64 = require('base-64');

        let username = "PlayCenter";
        let password = "azerty";
        let url = 'http://ygg.life/dev/PlayCenter/requete.php';
        //headers.append('Content-Type', 'application/json');

        fetch('http://ygg.life/dev/PlayCenter/requete.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic '+ base64.encode(username + ":" + password),
                //'Credentials': 'unsername:password'
            },
            body: 'action=requete&subaction=get_demineur&mail='+this.state.mail

        })
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
            })
    }

    render(){
        return (
            <Content>
                <Content style={{margin: 15}}>
                    <Body style={[{flex: 1, justifyContent: 'center'}]}>
                    <Text style={[styles.title_size, {alignItems: 'center', textAlign: 'center'}]}>Bienvenue {this.state.pseudo} sur la plateforme de jeu Play Center !</Text>
                    </Body>
                </Content>
                <Content>
                    <Content>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/2048.jpg')}/>
                                    <Body style={{flexDirection: "row"}}>
                                        <Text style={[styles.title_size]}> Faite glisser !</Text>
                                        <Text note style={[styles.text_size, {marginLeft: 25, marginTop: 5}]}>Score: {}</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem cardBody>
                                <Text style={[styles.text_size, {margin: 10}]}>
                                    Le but du jeu est de faire glisser des tuiles sur une grille,
                                    pour combiner les tuiles de mêmes valeurs et créer ainsi une tuile portant le nombre 2048
                                </Text>
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Button block
                                            onPress={this.handle2048}
                                            style={styles.button}>
                                        <Text>Scores 2048</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/taquin.jpg')}/>
                                    <Body>
                                    <Text style={[styles.title_size]}> Courage !</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem cardBody>
                                <Text style={[styles.text_size, {margin: 10}]}>
                                    Le jeu consiste à remettre dans l'ordre les 8 carreaux.
                                </Text>
                            </CardItem>

                            <CardItem>
                                <Body>
                                <Button block onPress={this.handleTaquin}
                                        style={styles.button}>
                                    <Text>Scores Taquin</Text>
                                </Button>
                                </Body>
                            </CardItem>
                        </Card>


                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/tetris.png')}/>
                                    <Body>
                                    <Text style={[styles.title_size]}> Nooon !</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem cardBody>
                                <Text style={[styles.text_size, {margin: 10}]}>
                                    Le joueur doit contrôler la chute de ces pièces latéralement ou en les
                                    faisant tourner sur elles-mêmes.
                                </Text>
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Button block onPress={this.handleTetris}
                                            style={styles.button}>
                                        <Text>Score Tetris</Text>
                                    </Button>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/snake.png')}/>
                                    <Body>
                                    <Text style={[styles.title_size]}> Serpent et Sourit !</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem cardBody>
                                <Text style={[styles.text_size, {margin: 10}]}>
                                    Attrape la sourit et attention au bord !
                                </Text>
                            </CardItem>

                            <CardItem>
                                <Body>
                                <Button block onPress={this.handleSnake}
                                        style={styles.button}>
                                    <Text>Scores Snake</Text>
                                </Button>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/demineur.png')}/>
                                    <Body>
                                    <Text style={[styles.title_size]}> Attention ça explose !</Text>
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem cardBody>
                                <Text style={[styles.text_size, {margin: 10}]}>
                                    Le démineur est un jeu de réflexion dont le but est de localiser des mines cachées dans un
                                    champ virtuel avec pour seule indication le nombre de mines dans les zones adjacentes.
                                </Text>
                            </CardItem>

                            <CardItem>
                                <Body>
                                <Button block onPress={this.handleDemineur}
                                        style={styles.button}>
                                    <Text>Scores Démineur</Text>
                                </Button>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Content>
            </Content>
        )
    }
}

const s = StyleSheet.create({

});