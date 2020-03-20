import joi from '@hapi/joi';

export const AppointmentCreateSchema = joi.object().keys({
    idDoctor: joi.number().required(),
    hora: joi.number().required(),
    fecha: joi.string().required()
});

export const AppointmentListSchema = joi.object().keys({
  idUser: joi.number().required()
});