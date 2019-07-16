import { useState, useEffect } from 'react'
import Realm from '../database/migrations'

function reducer(action, { realm, name, queryObjects }) {
    switch (action.type) {
    case 'create':
        return new Promise((resolve, reject) => {
            try {
                realm.write(() => {
                    resolve(realm.create(name, action.data))
                })
            } catch (error) {
                reject(error)
            }
        })
    case 'delete':
        return new Promise((resolve, reject) => {
            try {
                realm.write(() => {
                    resolve(realm.delete(action.delete(queryObjects)))
                })
            } catch (error) {
                reject(error)
            }
        })
    case 'update':
        return new Promise((resolve, reject) => {
            try {
                realm.write(() => {
                    action.update(queryObjects)
                })
            } catch (error) {
                reject(error)
            }
        })
    default:
        throw new Error()
    }
}

export function useRealmData(name, query = null) {
    const [data, setData] = useState([])
    const [queryObjects, setQueryObjects] = useState(null)
    const [realm, setRealm] = useState(null)

    useEffect(() => {
        Realm.then(r => {
            setQueryObjects(query ? query(r) : r.objects(name))
            setRealm(r)
        })
    }, [name, query])

    const dispatch = action => reducer(action, { realm, name, queryObjects })

    useEffect(() => {
        function handleChange(newData) {
            setData([...newData])
        }
        if (queryObjects) {
            queryObjects.addListener(handleChange)
            return () => {
                queryObjects.removeListener(handleChange)
            }
        }
    }, [name, queryObjects, realm])

    return [data, dispatch]
}

export function useRealm() {
    const [realm, setRealm] = useState(null)

    useEffect(() => {
        Realm.then(r => setRealm(r))
    }, [])

    return realm
}
