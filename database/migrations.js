import Realm from 'realm'
import schema1, { migrationFunction1 } from './schemas/v000001'
const { dbVersion } = require('../app.json')

const schemas = [
    { schema: schema1, schemaVersion: 0, migration: migrationFunction1 }
]

// the first schema to update to is the current schema version
// since the first schema in our array is at
let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath)
let lastIndex = nextSchemaIndex

while (nextSchemaIndex < dbVersion) {
    let newSchema = schemas[nextSchemaIndex++]
    if (newSchema) {
        lastIndex = nextSchemaIndex
        const migratedRealm = new Realm(newSchema)
        migratedRealm.close()
    }
}

// open the Realm with the latest schema
export default Realm.open(schemas[lastIndex - 1])
