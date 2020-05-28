import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SimplesJS from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverte, MegaSena } from './components/Mult'


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SimplesJS texto='Fléxivel' />
                <ParImpar numero={30} />
                <Text style={styles.text}>Revertendo texto</Text>
                <Inverte texto='React Native!' />
                <Text style={styles.text}>Sorteio de números</Text>
                <MegaSena numeros={6} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff3c49'
    },
    text:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})