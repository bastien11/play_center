import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import {Container, Content, Text, Header, Body} from 'native-base';

export default class HomeView extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container style={styles.header}>
                <Content>
                    <Text>Bienvenue sur l'application Play Center !</Text>
                </Content>
            </Container>
        )
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