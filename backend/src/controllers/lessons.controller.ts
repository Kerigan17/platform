import lessons from "../db/lessons";
import { Request, Response } from 'express';

const getAll = (req: Request, res: Response) => {
    lessons.selectAll().then(lessons => { // .then for async call
        res.status(200).send({
            message: 'OK',
            result: lessons
        })
    }).catch(err => {
        res.status(500).send({
            message: 'DATABASE ERROR',
            error: err.code
        })
    })
}

export default {getAll}