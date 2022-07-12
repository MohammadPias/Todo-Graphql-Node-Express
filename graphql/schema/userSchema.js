const { buildSchema } = require("graphql");

const userSchema = buildSchema(`
    type User {
        name: String
        email: String
        age: Int
        phone: String
    }  
    
    input UserInput {
        name: String
        email: String
        age: Int
        phone: String
    }

    type Query{
        findUser(email: String!): User
        findAllUsers: [User]
    }

    type Mutation{
        updateUser(user: UserInput): User
        addUser(user: UserInput): User
        deleteUser(email: String!): String
    }
`);
module.exports = userSchema;