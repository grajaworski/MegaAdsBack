import {createPool} from "mysql2/promise";
import {Config} from "../config/config";

export const pool = createPool({
    host: Config.dbHost,
    user: Config.dbUser,
    password: Config.dbPassword,
    database: Config.dbDatabase,
    namedPlaceholders: true,
    decimalNumbers: true,
});