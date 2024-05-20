import { Router, Request, Response } from 'express';
import { Student } from '../models/student';
import { connection } from '../config/db';
import { QueryError, PoolConnection } from 'mysql2';

const getAll = (req: Request, res: Response) => {
    connection.getConnection((err, conn: PoolConnection) => {
        conn.query("select * from students", (err: QueryError, resultSet: Student[]) => {
            conn.release();

            if (err) {
                res.status(500).send({
                    message: 'INTERNAL SERVER ERROR',
                    result: null
                });
            } else {
                res.status(200).send({
                    message: 'OK',
                    result: resultSet
                });
            }
        })
    });
}
export default { getAll }