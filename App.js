import React from 'react'
import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator
} from 'react-navigation'
import Login from './components/Login'
import Home from './components/Home'
import Config from './components/Config'
import List from './components/List'
import Language from './components/Language'

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        tabBarLabel: 'Home'
    },
    List: {
        screen: List,
        tabBarLabel: 'List'
    }
})

const DrawerNavigator = createDrawerNavigator(
    {
        Config: {
            screen: Config,
            drawerLabel: 'Config'
        },
        TabNavigator: {
            screen: TabNavigator,
            drawerLabel: 'Home'
        }
    },
    {
        initialRouteName: 'TabNavigator'
    }
)

const AppNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        DrawerNavigator: {
            screen: DrawerNavigator
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
