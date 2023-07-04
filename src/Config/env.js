import * as dotenv from 'dotenv'
dotenv.config()

const env = {
    TZ: process.env.TZ,
    TIME_ZONE: process.env.TIME_ZONE,
    PORT: process.env.PORT,
    DB_DIALECT: process.env.DB_DIALECT,
    HOST: process.env.HOST,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    TOKEN_EXPIRED_MINUTES: process.env.TOKEN_EXPIRED_MINUTES,
    SECRET_JWT: process.env.SECRET_JWT
}

export default env