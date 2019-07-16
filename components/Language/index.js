import React, { useState, useContext } from 'react'
import { Platform, NativeModules } from 'react-native'
import PropTypes from 'prop-types'

const languageJson = require('../../language.json')

const deviceLanguage =
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier

export const LanguageContext = React.createContext(deviceLanguage)

export const T = ({ string }) => {
    const { language } = useContext(LanguageContext)
    console.log('string', string)
    let res =
        languageJson[string] && languageJson[string][language]
            ? languageJson[string][language]
            : languageJson[string]['en_US']
    return res
}

export default function Language({ children }) {
    const [language, setLanguage] = useState(deviceLanguage)

    const t = key => {
        let string =
            languageJson[key] && languageJson[key][language]
                ? languageJson[key][language]
                : languageJson[key]['en_US']
        if (string) return string
        throw Error(`Key ${key} not found`)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

Language.propTypes = {
    children: PropTypes.node
}
