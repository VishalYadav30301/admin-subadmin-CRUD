export default () => ({

    database: {
        uri: process.env.MONGO_URI
    },

    jwt: {
        secret: process.env.JWT_SECRET,
        expiry: process.env.JWT_EXPIRES_IN
    },

    superAdmin: {
        email: process.env.SUPER_ADMIN_EMAIL,
        password: process.env.SUPER_ADMIN_PASS
    }
})