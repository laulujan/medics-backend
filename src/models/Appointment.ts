import joi from '@hapi/joi';

export const AppointmentCreateSchema = joi.object().keys({
    idDoctor: joi.number().required(),
    hora: joi.number().required(),
    fecha: joi.string().required()
});

export const AppointmentListSchema = joi.object().keys({
  idUser: joi.number().required()
});

export const AppointmentCancelSchema = joi.object().keys({
  id: joi.number().required()
});

export const AppointmentDeleteSchema = joi.object().keys({
  id: joi.number().required()
});