import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


import SimplesJS from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverte, MegaSena } from './components/Mult'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import Avo from './components/ComunicacaoDireta'
import TextoSincronizado from './components/ComunicacaoIndereta'
import ListaFlex from './components/ListaFlex'
import Flex from './components/Flex'


const Drawer = createDrawerNavigator()



function FlexScreen({ navigation }) {
    return (
        <Flex />
    )
}

function ListaFlexScreen({ navigation }) {
    return (
        <ListaFlex />
    )
}

function TextoSincroScreen({ navigation }) {
    return (
        <TextoSincronizado />
    )
}

function AvoScreen({ navigation }) {
    return (
        <Avo nome='João' sobrenome='Silva' />
    )
}

function EventoScreen({ navigation }) {
    return (
        <Evento />
    )
}

function ValidarPropsScreen({ navigation }) {
    return (
        <ValidarProps label='Ano: ' ano={19} />
    )
}

function PlataformaScreen({ navigation }) {
    return (
        <Plataformas />
    )
}

function ContadorScreen({ navigation }) {
    return (
        <Contador numeroInicial={0} />
    )
}

function MegaSenaScreen({ navigation }) {
    return (
        <MegaSena numeros={6} />
    );
}

function InverterScreen({ navigation }) {
    return (
        <Inverte texto='React Native' />
    );
}
function ParImparScreen({ navigation }) {
    return (
        <ParImpar numero={30} />
    );
}
function SimplesScreen({ navigation }) {
    return (
        <SimplesJS texto='Flexível!!' />
    );
}



export default function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Flex" component={FlexScreen} />
                <Drawer.Screen name="Lista Flex" component={ListaFlexScreen} />
                <Drawer.Screen name="Texto sincronizado" component={TextoSincroScreen} />
                <Drawer.Screen name="Cominucação direta" component={AvoScreen} />
                <Drawer.Screen name="Evento" component={EventoScreen} />
                <Drawer.Screen name="Validando Props" component={ValidarPropsScreen} />
                <Drawer.Screen name="Plataforma" component={PlataformaScreen} />
                <Drawer.Screen name="Contador" component={ContadorScreen} />
                <Drawer.Screen name="Mega Sena" component={MegaSenaScreen} />
                <Drawer.Screen name="Inverter" component={InverterScreen} />
                <Drawer.Screen name="Par e Ímpar" component={ParImparScreen} />
                <Drawer.Screen name="Simples" component={SimplesScreen} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}