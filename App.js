import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './components/Login'
import Language from './components/Language'
const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login
        }
    },
    {
        initialRouteName: 'Login'
    }
)

const AppContainer = createAppContainer(AppNavigator)

const App = () => {
    return (
        <Language>
            <AppContainer />
        </Language>
    )
}

export default App
