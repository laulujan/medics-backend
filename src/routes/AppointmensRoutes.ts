import createAppointment from '../controllers/Appointment/create';
import listAppointment from '../controllers/Appointment/list';
import cancelAppointment from '../controllers/Appointment/cancel';
import deleteAppointment from '../controllers/Appointment/delete'

import express, { Router } from 'express';
import {appointmentValidator, appointmentListValidator, appointmentCancelValidator, appointmentDeleteValidator} from '../middlewares/appointments';

const router: Router = express.Router();
router.post('/', [appointmentValidator, createAppointment]);
router.get('/list/:idUser', [appointmentListValidator, listAppointment]);
router.put('/cancel/:id', [appointmentCancelValidator, cancelAppointment])
router.put('/delete/:id', [appointmentDeleteValidator, deleteAppointment])

export default router;