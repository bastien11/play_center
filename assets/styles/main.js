'use strict';
import React from 'react'
import {StyleSheet, StatusBar, Image, Dimensions} from 'react-native';
import {Constants} from 'expo';

const {
    width, height
} = Dimensions.get('window');

export default StyleSheet.create({

    stateBar: {
        marginTop: Constants.statusBarHeight,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },

    title_size: {
        fontSize: width > 320 && height > 568 ? 24 : 22
    },

    text_size: {
        fontSize: width > 320 && height > 568 ? 18 : 16
    },

    button: {
        margin: 7
    }
});
