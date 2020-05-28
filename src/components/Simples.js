import React from 'react'
import { Text, View } from 'react-native'
import Padrao from  '../styles/padrao'

export default (props) => {
    return <Text style={[Padrao.ex]}>{props.texto}</Text>
}