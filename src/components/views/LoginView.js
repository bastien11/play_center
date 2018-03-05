import React from 'react';
import { StyleSheet, StatusBar, AsyncStorage, Alert } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { Text, Content, Input, Label, Form, Item, Icon, Button } from 'native-base';

const url = 'http://ygg.life/dev/PlayCenter/requete.php';

export default class LoginView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    async saveItem(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.error('AsyncStorage error: ' + error.message);
        }
    }

    hashCode(str){
        let len = str.length;
        let hash = 0;
        for(let i=1; i<=len; i++){
            let char = str.charCodeAt((i-1));
            hash += char*Math.pow(31,(len-i));
            hash = hash & hash; //javascript limitation to force to 32 bits
        }
        return hash;
    }

    userLogin(){
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
            body: 'action=requete&subaction=connexion&mail='+this.state.login+'&mdp='+this.hashCode(this.state.password)

        })
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.result === "OK") {
                    this.saveItem('PSEUDO', responseJson.pseudo);
                    this.saveItem('MAIL', responseJson.mail);
                    Actions.push('HomeView')
                } else {
                    Alert.alert("Erreur de saire", "Veuillez entrez des indentifiants valide")
                }
            })
    }

    render() {
        return (
            <Content style={styles.header}>
                <Form style={styles.container}>
                    <Item floatingLabel={true}>
                        <Icon
                            name={'person'}/>
                        <Label>Numéro adéhrent</Label>
                        <Input
                            onChangeText={(text) => this.setState({login: text})}/>
                    </Item>
                    <Item
                        floatingLabel={true}>
                        <Icon
                            name={'lock'}/>
                        <Label>Mot de passe</Label>
                        <Input secureTextEntry
                               onChangeText={(text) => this.setState({password: text})}/>
                    </Item>
                    <Button block rounded
                            onPress={this.userLogin.bind(this)}>
                        <Text>Connexion</Text>
                    </Button>
                </Form>
            </Content>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        marginTop: StatusBar.currentHeight,
    }
});