import { Request, Response, NextFunction } from "express";
import { AppointmentCreateSchema, AppointmentListSchema, AppointmentCancelSchema, AppointmentDeleteSchema } from "../models/Appointment";

export const appointmentValidator = ( req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
    const validation = AppointmentCreateSchema.validate(req.body);
    if( validation.error){
        return res.send(400).json(validation.error.details)
    }
    next();
}


export const appointmentListValidator = ( req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
    const validation = AppointmentListSchema.validate(req.params);
    if( validation.error){
        return res.send(400).json(validation.error.details)
    }
    next();
}
export const appointmentCancelValidator = ( req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
    const validation = AppointmentCancelSchema.validate(req.params);
    if( validation.error){
        return res.send(400).json(validation.error.details)
    }
    next();
}
export const appointmentDeleteValidator = ( req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
    const validation = AppointmentDeleteSchema.validate(req.params);
    if( validation.error){
        return res.send(400).json(validation.error.details)
    }
    next();
}

