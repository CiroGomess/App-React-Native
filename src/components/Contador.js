import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Padrao from '../styles/padrao'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }


    limpar = () => {
        this.setState({ numero: this.props.numeroInicial })
    }




    render() {
        return (
            <View>
                <Text style={Padrao.ex}>{this.state.numero}</Text>

                <TouchableOpacity onPress={this.maisUm} onLongPress={this.limpar}>
                    <Text style={Padrao.Imcrementar}>Incrementar/ Limpar</Text>
                </TouchableOpacity>

            </View >

        )
    }
}