import { Router, Request, Response } from 'express';
import { Student } from '../models/student';
import { connection } from '../config/db';
import { QueryError, PoolConnection } from 'mysql2';

const studentsList: Student[] = [
    {
        id: 1,
        name: 'Alex',
        age: 16,
        courses: 'python',
        teacher_id: 1
    },
    {
        id: 1,
        name: 'Norton',
        age: 12,
        courses: 'web',
        teacher_id: 2
    },
    {
        id: 1,
        name: 'Gordon',
        age: 15,
        courses: 'web, python',
        teacher_id: 2
    }
]

const getAll = (req: Request, res: Response) => {
    // res.status(200).send(studentsList);
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