import React, { useContext } from 'react'
import { Text, SafeAreaView } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import PropTypes from 'prop-types'
import {
    MainContainer,
    TopContainer,
    CenterContainer,
    BottomContainer
} from './styles'
import { TextInputFormik, InputFormik, ErrorMessageFormik } from '../TextInput'
import Button from '../Button'
import { useRealmData } from '../../hooks/useRealm'
import { LanguageContext, T } from '../Language'

const { version } = require('../../package.json')

const LoginValidation = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
})

const initialValues = {
    username: '',
    password: ''
}

const Login = ({ navigation }) => {
    const [users] = useRealmData('Users')
    const { t } = useContext(LanguageContext)

    const checkUser = ({ username, password }) => {
        let loginUser = users.filter(
            user =>
                user.username.toLowerCase() == username.toLowerCase() &&
                user.password.toLowerCase() == password.toLowerCase()
        )
        if (loginUser.length > 0) {
            navigation.navigate('Home')
        } else {
            alert('bad')
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
                                <Text>
                                    <T string="welcome" />
                                </Text>
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
                                <Button
                                    text={t('login')}
                                    onPress={handleSubmit}
                                />
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

Login.propTypes = {
    navigation: PropTypes.object
}

Login.navigationOptions = ({}) => {
    return {
        header: null
    }
}

export default Login
