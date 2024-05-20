import {Lesson} from "../models/lesson";
import { connection } from '../config/db';
import { QueryError, PoolConnection } from 'mysql2';

const selectAll = (): Promise<Lesson[]> => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, conn: PoolConnection) => {
            conn.query("select * from lessons where teacher_id=1", (err: QueryError, resultSet: Lesson[]) => {
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