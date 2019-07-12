import React from 'react'
import PropTypes from 'prop-types'
import { TouchContainer, Container, Text } from './styles'

const Button = ({ text, onPress, onLongPress, ...otherProps }) => {
    return (
        <TouchContainer {...{ onPress, onLongPress }}>
            <Container {...otherProps}>
                <Text>{text}</Text>
            </Container>
        </TouchContainer>
    )
}
Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func
}

export default Button
