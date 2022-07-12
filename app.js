const express = require("express");
const mongoose = require("mongoose");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const root = require("./graphql/resolver/userResolvers");
const userSchema = require("./graphql/schema/userSchema");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.o4muq.mongodb.net/my-todo-app?retryWrites=true&w=majority`;

const app = express();
const port = process.env.PORT || 5000

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: userSchema,
    rootValue: root,
}))
mongoose.connect(uri, {

}).then(() => {
    console.log("Connected");
    app.listen(port, () => {
        console.log(`Listening port on ${port}`)
    })
})