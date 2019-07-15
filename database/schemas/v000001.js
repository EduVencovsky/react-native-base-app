const UserSchema = {
    name: 'Users',
    properties: {
        username: 'string',
        password: 'string',
        age: 'int'
    }
}

export const migrationFunction1 = () => {}

export default [UserSchema]
