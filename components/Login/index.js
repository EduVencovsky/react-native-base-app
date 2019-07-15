import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import { Container } from './styles'
import { Formik } from 'formik'
import { TextInputFormik, InputFormik, ErrorMessageFormik } from '../TextInput'
import Button from '../Button'
import { useRealmData } from '../../hooks/useRealm'
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
    const [users, dispatch] = useRealmData('Users')

    const addUser = ({ username, password }) => {
        dispatch({ type: 'create', data: { username, password, age: 1 } }).then(
            user => console.log('added')
        )
    }

    const deleteLastUser = () => {
        dispatch({
            type: 'update',
            update: data =>
                data.filtered('age == 1').forEach(e => {
                    e.username = 'nice'
                })
        })
            .then(update => console.log('deleted'))
            .catch(error => console.log(error))
    }

    return (
        <SafeAreaView>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginValidation}
                onSubmit={addUser}
            >
                {({ handleSubmit }) => (
                    <>
                        <Container>
                            <Text>Hello</Text>
                            <TextInputFormik name="username" width="100%" />
                            <ErrorMessageFormik name="username" />
                            <InputFormik
                                name="password"
                                inputProps={{
                                    width: '100%',
                                    secureTextEntry: true
                                }}
                            />
                            <Button text="hey" onPress={handleSubmit} />
                            <Button text="delete" onPress={deleteLastUser} />
                            <Text>{JSON.stringify(users)}</Text>
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
