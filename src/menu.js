import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


import SimplesJS from './components/Simples'
import ParImpar from './components/ParImpar'
import { Inverte, MegaSena } from './components/Mult'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'

const Drawer = createDrawerNavigator()


function PlataformaScreen({ navigation }) {
    return (
        <Plataformas />
    )
}
function ContadorScreen({ navigation }) {
    return (
        <Contador numeroInicial={0}></Contador>
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