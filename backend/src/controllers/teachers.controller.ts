import {Request, Response} from 'express'
import Teachers from "../models/teachers.model";
import teacherRepository from "../repositories/teacher.repository";

export default class TeachersController{
    async findOne(request:Request, response:Response){
        console.log(request.body)
        try{
            teacherRepository.retrieveByLogin({login:"dmitry", password:"12345"})
                .then((teachers)=>{
                    response.status(200).json({success:true, data: (teachers as Teachers[])[0]});
                })
        }catch(e){
            let message= (e as Error).message;
            response.status(500).json({success: false, error: message});
        }
    }
}