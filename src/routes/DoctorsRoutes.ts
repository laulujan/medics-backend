import lisDoctors from '../controllers/Doctors/list';
import schedule from '../controllers/Doctors/schedule';

import express, { Router } from 'express';
import {doctorListValidator, scheduleValidator} from '../middlewares/doctors';

const router: Router = express.Router();

router.get('/list/:lat/:lng/:keyword', [doctorListValidator, lisDoctors]);
router.get('/:id/schedule', [scheduleValidator, schedule]);
export default router;