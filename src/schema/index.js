const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        missingPersons: [MissingPerson!]
    }

    type Mutation {
        createMissingPerson(
            name: String,
            description: String,
            age: Int,
            gender: String,
            photoUrl: String,
            missingDateTime: String,
            guardianName: String,
            guardianMobile: String
            ): MissingPerson
    }

    type MissingPerson {
        id: ID!
        name: String
        description: String
        age: Int
        gender: String
        photoUrl: String
        missingDateTime: String
        guardianName: String
        guardianMobile: String
        createdAt: String
    }
`;

module.exports = typeDefs;
