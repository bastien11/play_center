import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Text, Content, Input, Label, Form, Item, Icon, Button } from 'native-base';

export default class LoginView extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    userLogin(){
        Actions.push('HomeView')
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