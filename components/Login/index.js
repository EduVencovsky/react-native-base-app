import React from 'react'
import { Text, SafeAreaView } from 'react-native'

const Login = () => {
    return (
        <SafeAreaView>
            <Text>Login</Text>
        </SafeAreaView>
    )
}

Login.navigationOptions = ({}) => {
    return {
        header: null
    }
}

export default Login
