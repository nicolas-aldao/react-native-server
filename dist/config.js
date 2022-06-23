"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = require("dotenv");

var REACT_APP_DB_HOST = process.env.REACT_APP_DB_HOST;
var REACT_APP_DB_USER = process.env.REACT_APP_DB_USER;
var REACT_APP_PASSWORD = process.env.REACT_APP_PASSWORD;
(0, _dotenv.config)(); // export const config = {
//     host: REACT_APP_DB_HOST || 'localhost',
//     user: REACT_APP_DB_USER || 'root',
//     password: REACT_APP_PASSWORD || '',
//     database: 'tasksdb' || 'test',
//     ssl: {
//         rejectUnauthorized: false
//     }
// }

var config = {
  host: "t2bkwyjck6bw.aws-sa-east-1-1.psdb.cloud",
  user: "215zzoe2gvw6",
  password: "pscale_pw_zacWK0FXw7xRT23iLbpVVmS-JhH4cTCiUkeCJgv9xXU",
  database: "tasksdb",
  ssl: {
    rejectUnauthorized: false
  }
};
exports.config = config;