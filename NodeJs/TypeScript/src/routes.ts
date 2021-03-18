import {Request, Response} from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response : Response){
    
    CreateCourseService.execute({
        educator: "Diego",
        name: "NodeJS"
    });
    
    CreateCourseService.execute({
        educator: "TEST",
        name: "NodeJS",
        duration: 10
    });

    return response.send();
}