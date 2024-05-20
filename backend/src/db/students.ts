import {Student} from "../models/student";
import { connection } from '../config/db';
import { QueryError, PoolConnection } from 'mysql2';

const selectAll = (): Promise<Student[]> => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, conn: PoolConnection) => {
            conn.query("select * from students", (err: QueryError, resultSet: Student[]) => {
                conn.release();
                if (err) {
                    return reject(err);
                }
                return resolve(resultSet);
            });
        });
    });
}
export default { selectAll };