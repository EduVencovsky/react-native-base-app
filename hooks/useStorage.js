import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export const useStorage = (key, initialValue) => {
    const [data, setData] = useState(null)

    const set = newData => {
        return AsyncStorage.setItem(`@${key}`, JSON.stringify(newData)).then(
            () => setData(newData)
        )
    }

    useEffect(() => {
        AsyncStorage.getItem(`@${key}`).then(res => {
            if (res === null) {
                AsyncStorage.setItem(
                    `@${key}`,
                    JSON.stringify(initialValue)
                ).then(() => setData(initialValue))
            } else {
                setData(JSON.parse(res))
            }
        })
    }, [initialValue, key])

    return [data, set]
}
