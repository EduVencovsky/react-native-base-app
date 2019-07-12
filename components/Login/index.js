import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { Container } from './styles'
import { Formik } from 'formik'
import { TextInputFormik, InputFormik, ErrorMessageFormik } from '../TextInput'
import Button from '../Button'

import * as Yup from 'yup'

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
    return (
        <SafeAreaView>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginValidation}
                onSubmit={() => alert('hey')}
            >
                {({ handleSubmit }) => (
                    <>
                        <Container>
                            <Text>Hello</Text>
                            <TextInputFormik name="username" width="100%" />
                            <ErrorMessageFormik name="username" />
                            <InputFormik name="password" />
                            <Button text="hey" onPress={handleSubmit} />
                        </Container>
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
