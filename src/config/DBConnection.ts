import { constants } from './constants';
const mysql = require("mysql");


export const conn = mysql.createConnection({
  host: constants.host,
  user: constants.user,
  password: constants.password,
  database: constants.database,
  multipleStatements: true,
  port: constants.dbport
});
