import {config as dotenv} from 'dotenv';
dotenv();

export const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DB || 'test',
    ssl: {
        rejectUnauthorized: false
    }
}

// export const config = {
//     host: "t2bkwyjck6bw.aws-sa-east-1-1.psdb.cloud",
//     user: "a9dhb0t5ksso",
//     password: "pscale_pw_J0CminD5flr1iZZDscllnICqVH_hUZ5lNDfirAdFUDc",
//     database: "tasksdb",
//     ssl: {
//         rejectUnauthorized: false
//     }
// }