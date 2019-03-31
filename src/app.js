const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

mongoose.connect(process.env.MONGODB_DATABASE_URI, {
    useNewUrlParser: true
});
mongoose.connection.once('open', () => {
    console.log('Connected to Database');
});

const context = async ({ req }) => {

};

const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    context,
});

server
.listen({ port: process.env.PORT })
.then(({ url }) => console.log(`RescueBuddy GraphQL API running at ${url}`));