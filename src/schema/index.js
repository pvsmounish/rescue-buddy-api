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
        volunteers: [Volunteer!]
        reliefCamps: [ReliefCamp!]
        donations: [Donation!]
        requestHelps: [RequestHelp!]
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
            guardianMobile: String,
            city: String,
            address: String
        ): MissingPerson
    
        createAnnouncement(
            description: String,
            from: String,
            priority: Priority
        ): Announcement

        createVolunteer(
            name: String,
            age: Int,
            city: String,
            address: String,
            gender: Gender,
            mobileNumber: String,
            category: String
        ): Volunteer

        createReliefCamp(
            campName: String,
            latitude: String,
            longitude: String,
            address: String,
            mobileNumber: String
        ): ReliefCamp

        createDonation(
            name: String,
            city: String,
            amount: Int
        ): Donation
        
        createRequestHelp(
            name: String,
            description: String,
            city: String,
            address: String,
            mobileNumber: String
        ): RequestHelp
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
        city: String
        address: String
        createdAt: String
    }

    type Announcement{
        id: ID!
        description: String
        from: String
        priority: Priority
        createdAt: String
    }

    type Volunteer {
        id: ID!
        name: String
        age: Int
        city: String
        address: String
        gender: Gender
        mobileNumber: String
        category: String
    }

    type ReliefCamp {
        id: ID!
        campName: String
        latitude: String
        longitude: String
        address: String
        mobileNumber: String
    }

    type Donation {
        id: ID!
        name: String
        city: String
        amount: Int
        createdAt: String
    }

    type RequestHelp {
        id: ID!
        name: String
        description: String
        city: String
        address: String
        mobileNumber: String
        createdAt: String
    }
`;

module.exports = typeDefs;
