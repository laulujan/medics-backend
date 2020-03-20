import { Request, Response, NextFunction } from "express";
import { DoctorFindSchema, DoctorSchema } from "../models/Doctor";

export const doctorListValidator = ( req: Request, res: Response, next: NextFunction) => {
    const validation = DoctorSchema.validate(req.params);
    if( validation.error){
        return res.send(400).json(validation.error.details)
    }
    next();
}


export const scheduleValidator = ( req: Request, res: Response, next: NextFunction) => {
  const validation = DoctorFindSchema.validate(req.params);
    if( validation.error){
        return res.send(400).json(validation.error.details)
    }
    next();
}