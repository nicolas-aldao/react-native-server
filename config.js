"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var config = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.PASSWORD || '',
  database: process.env.DB || 'test',
  ssl: {
    rejectUnauthorized: false
  }
}; // export const config = {
//     host: "t2bkwyjck6bw.aws-sa-east-1-1.psdb.cloud",
//     user: "a9dhb0t5ksso",
//     password: "pscale_pw_J0CminD5flr1iZZDscllnICqVH_hUZ5lNDfirAdFUDc",
//     database: "tasksdb",
//     ssl: {
//         rejectUnauthorized: false
//     }
// }

exports.config = config;