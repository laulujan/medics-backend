import joi from '@hapi/joi';

export type Doctor = {
    lat: string;
    lng: string;
    keyword: string;
}

export const DoctorSchema = joi.object().keys({
    lat: joi.string().required(),
    lng: joi.string().required(),
    keyword: joi.string().alphanum().required()
});


export const DoctorFindSchema = joi.object().keys({
    id: joi.string().required()
});