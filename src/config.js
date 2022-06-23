import {config as dotenv} from 'dotenv';
const REACT_APP_DB_HOST = process.env.REACT_APP_DB_HOST
const REACT_APP_DB_USER = process.env.REACT_APP_DB_USER
const REACT_APP_PASSWORD = process.env.REACT_APP_PASSWORD
dotenv();

export const config = {
    host: REACT_APP_DB_HOST || 'localhost',
    user: REACT_APP_DB_USER || 'root',
    password: REACT_APP_PASSWORD || '',
    database: 'tasksdb' || 'test',
    ssl: {
        rejectUnauthorized: false
    }
}

// export const config = {
//     host: "t2bkwyjck6bw.aws-sa-east-1-1.psdb.cloud",
//     user: "215zzoe2gvw6",
//     password: "pscale_pw_zacWK0FXw7xRT23iLbpVVmS-JhH4cTCiUkeCJgv9xXU",
//     database: "tasksdb",
//     ssl: {
//         rejectUnauthorized: false
//     }
// }