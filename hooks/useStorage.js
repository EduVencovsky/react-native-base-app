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

export default (Storage = {
    async getItem(itemKey) {
        let result = {
            key: itemKey,
            value: null,
            error: null
        }

        try {
            const item = await AsyncStorage.getItem(itemKey)
            if (item !== null) {
                result.value = JSON.parse(item)
            }
        } catch (error) {
            result.error = error
        }

        return result
    },
    async setItem(itemKey, itemValue) {
        let result = {
            key: itemKey,
            value: null,
            error: null
        }
        try {
            await AsyncStorage.setItem(itemKey, JSON.stringify(itemValue))
            result.value = itemValue
        } catch (error) {
            result.error = error
        }
        return result
    },
    async removeItem(itemKey) {
        let result = {
            key: itemKey,
            value: null,
            error: null
        }
        try {
            result.value = await AsyncStorage.getItem(itemKey)
            await AsyncStorage.removeItem(itemKey)
        } catch (error) {
            result.error = error
        }
        return result
    },
    async concatArray(itemKey, itemValue) {
        let result = {
            key: itemKey,
            value: null,
            error: null
        }

        try {
            let oldArray = await AsyncStorage.getItem(itemKey)
            let array = oldArray ? JSON.parse(oldArray) : []
            array.push(itemValue)
            await AsyncStorage.setItem(itemKey, JSON.stringify(array))
            result.value = array
        } catch (error) {
            result.error = error
        }

        return result
    },
    async updateArrayAtIndex(itemKey, itemValue, itemIndex) {
        let result = {
            key: itemKey,
            value: null,
            error: null
        }

        try {
            let oldArray = await AsyncStorage.getItem(itemKey)
            let array = oldArray ? JSON.parse(oldArray) : []
            array[itemIndex] = itemValue
            await AsyncStorage.setItem(itemKey, JSON.stringify(array))
            result.value = array
        } catch (error) {
            result.error = error
        }

        return result
    },
    async removeArrayIndex(itemKey, itemIndex) {
        let result = {
            key: itemKey,
            value: null,
            error: null
        }

        try {
            let oldArray = await AsyncStorage.getItem(itemKey)
            let array = oldArray ? JSON.parse(oldArray) : []
            array = array.filter((x, i) => i != itemIndex)
            await AsyncStorage.setItem(itemKey, JSON.stringify(array))
            result.value = array
        } catch (error) {
            result.error = error
        }

        return result
    }
})
