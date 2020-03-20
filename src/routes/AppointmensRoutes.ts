import createAppointment from '../controllers/Appointment/create'
import listAppointment from '../controllers/Appointment/list'

import express, { Router } from 'express';
import {appointmentValidator, appointmentListValidator} from '../middlewares/appointments';

const router: Router = express.Router();
router.post('/', [appointmentValidator, createAppointment]);
router.get('/list/:idUser', [appointmentListValidator, listAppointment]);

export default router;