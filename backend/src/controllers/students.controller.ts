import students from "../db/students";
import { Request, Response } from 'express';

const getAll = (req: Request, res: Response) => {
    students.selectAll().then(students => { // .then for async call
        res.status(200).send({
            message: 'OK',
            result: students
        })
    }).catch(err => {
        res.status(500).send({
            message: 'DATABASE ERROR',
            error: err.code
        })
    })
}

export default {getAll}