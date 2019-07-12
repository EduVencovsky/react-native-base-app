import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './components/Login'

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

export default createAppContainer(AppNavigator)
