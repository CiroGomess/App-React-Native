import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import Padrao from '../styles/padrao'

const ValidarProps = props =>
    <Text style={Padrao.ex}>
        {props.label}
        {props.ano + 2000}
    </Text>

ValidarProps.defaultProps = {
    label: 'Ano: ',
}

ValidarProps.prototype = {
    ano: PropTypes.number.isRequired
}

export default ValidarProps