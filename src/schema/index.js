const { gql } = require('apollo-server');

const typeDefs = gql`
    enum Priority {
        HIGH
        MEDIUM
        LOW
    }

    type Query {
        missingPersons: [MissingPerson!]
        announcements: [Announcement!]
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
    
        createAnnouncement(
            description: String,
            from: String,
            priority: Priority
        ): Announcement
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

    type Announcement{
        id: ID!
        description: String,
        from: String,
        priority: Priority
        createdAt: String
    }
`;

module.exports = typeDefs;
