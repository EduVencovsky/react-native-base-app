import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import {
    MainContainer,
    TopContainer,
    CenterContainer,
    BottomContainer
} from './styles'
import { Formik } from 'formik'
import { TextInputFormik, InputFormik, ErrorMessageFormik } from '../TextInput'
import Button from '../Button'
import { useRealmData } from '../../hooks/useRealm'
import * as Yup from 'yup'

const { version } = require('../../package.json')

const LoginValidation = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required')
})

const initialValues = {
    username: '',
    password: ''
}

const Login = () => {
    const [users] = useRealmData('Users')

    const checkUser = ({ username, password }) => {
        let loginUser = users.filter(
            user => user.username == username && user.password == password
        )
        if (loginUser.length > 0) {
            alert('good')
        } else {
            alert('wrong')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginValidation}
                onSubmit={checkUser}
            >
                {({ handleSubmit }) => (
                    <>
                        <MainContainer>
                            <TopContainer>
                                <Text>Hello</Text>
                            </TopContainer>
                            <CenterContainer>
                                <TextInputFormik
                                    name="username"
                                    width="80%"
                                    placeholder="Usuario"
                                />
                                <ErrorMessageFormik name="username" />
                                <InputFormik
                                    name="password"
                                    inputProps={{
                                        width: '80%',
                                        placeholder: 'Senha',
                                        secureTextEntry: true
                                    }}
                                />
                                <Button text="Login" onPress={handleSubmit} />
                            </CenterContainer>
                            <BottomContainer>
                                <Text>{version}</Text>
                            </BottomContainer>
                        </MainContainer>
                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}

Login.navigationOptions = ({}) => {
    return {
        header: null
    }
}

export default Login
