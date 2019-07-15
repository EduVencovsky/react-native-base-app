import React from 'react'
import PropTypes from 'prop-types'
import { Input, Error } from './styles'
import { connect } from 'formik'

export const TextInput = props => {
    return <Input {...props} />
}

export const ErrorMessage = ({ errors, ...otherProps }) => (
    <Error {...otherProps}>{errors}</Error>
)

ErrorMessage.propTypes = {
    errors: PropTypes.string.isRequired
}

const UnconnectedTextInputFormik = ({ formik, name, ...otherProps }) => (
    <TextInput
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
        value={formik.values[name]}
        {...otherProps}
    />
)

UnconnectedTextInputFormik.propTypes = {
    name: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired
}

export const TextInputFormik = connect(UnconnectedTextInputFormik)

const UnconnectedErrorMessageFormik = ({ formik, name, ...otherProps }) =>
    formik.errors[name] && formik.touched[name] ? (
        <ErrorMessage errors={formik.errors[name]} {...otherProps} />
    ) : null

UnconnectedErrorMessageFormik.propTypes = {
    name: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired
}

export const ErrorMessageFormik = connect(UnconnectedErrorMessageFormik)

const UnconnectedInputFormik = ({ formik, name, inputProps, errorProps }) => (
    <>
        <TextInput
            onChangeText={formik.handleChange(name)}
            onBlur={formik.handleBlur(name)}
            value={formik.values[name]}
            {...inputProps}
        />
        {formik.errors[name] && formik.touched[name] ? (
            <ErrorMessage errors={formik.errors[name]} {...errorProps} />
        ) : null}
    </>
)

UnconnectedInputFormik.propTypes = {
    name: PropTypes.string.isRequired,
    formik: PropTypes.object.isRequired,
    inputProps: PropTypes.object,
    errorProps: PropTypes.object
}

export const InputFormik = connect(UnconnectedInputFormik)
