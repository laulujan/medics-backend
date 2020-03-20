import express, { Application, Request, Response } from 'express';

const app: Application = express();

import bodyParser from 'body-parser';
import doctorsRoutes from './routes/DoctorsRoutes'
import appointmentRoutes from './routes/AppointmensRoutes'

app.use('/doctors',[doctorsRoutes]);
app.use('/appointments',[appointmentRoutes]);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.send('hellooooo');
});

export default app;