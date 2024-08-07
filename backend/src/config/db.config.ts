export const config = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "SQl10879",
    DB: "platform",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export const dialect = "mysql";