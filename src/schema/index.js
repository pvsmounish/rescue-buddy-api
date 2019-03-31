const { gql } = require('apollo-server');

const typeDefs = gql`
    enum Priority {
        HIGH
        MEDIUM
        LOW
    }

    enum Gender {
        MALE
        FEMALE
        OTHER_GENDER
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
            gender: Gender,
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
        gender: Gender
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
