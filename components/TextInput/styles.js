import styled, { css } from 'styled-components'

export const Input = styled.TextInput`
    ${({ backgroundColor = 'gray' }) =>
        css`
            background-color: ${backgroundColor};
        `}
    ${({ width }) =>
        width &&
        css`
            width: ${width};
        `}
    
    padding: 20px;
    margin-bottom: 10px;
    color: black;
`

export const Error = styled.Text`
    color: red;
`
