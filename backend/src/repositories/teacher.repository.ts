import Teachers from "../models/teachers.model";
import {Op} from "sequelize";

interface ITeachersRepository {
    retrieveByLogin(searchParams: {login: string, password: string}): Promise<Teachers[]|null>;
}

class TeachersRepository implements ITeachersRepository {
    async retrieveByLogin(searchParams: {login: string, password: string}): Promise<Teachers[]|null> {
        try{
            let condition = {
                where: {
                    [Op.and]: [
                            {login:searchParams.login},
                            {password:searchParams.password}
                        ]
                }
            }
            return await Teachers.findAll(condition);
        }catch(error){
            throw new Error((error as Error).message);
        }
    }
}

export default new TeachersRepository();