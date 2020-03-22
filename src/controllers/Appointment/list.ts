import { Request, Response } from 'express';
import {conn} from '../../config/DBConnection';
import moment from 'moment';

export default (req: Request, res: Response) =>{

    const idUser: string = req.params.idUser;
    let currenTDATE = moment().format('YYYY-MM-DD');
   

    let query = `SELECT *, appointments.id AS id_appointment FROM appointments 
    INNER JOIN doctors 
    ON doctors.id = appointments.idDoctor 
    WHERE appointments.idUser = ${idUser} 
    AND appointments.selected_date >= "${currenTDATE}" ;`;
    
    let pastQuery = `SELECT *, appointments.id AS id_appointment FROM appointments 
    INNER JOIN doctors 
    ON doctors.id = appointments.idDoctor 
    WHERE appointments.idUser = ${idUser} 
    AND appointments.selected_date <= "${currenTDATE}" AND appointments.deleted = 0;`;
    
    let response = {pending: null, past: null};
    conn.query(query, function (err, result, fields) {
        if (err) res.status(400).json({});
        
        response.pending = result;
        conn.query(pastQuery, function (err, result, fields){
            if(err) res.status(400).json({});
            response.past = result;
            res.status(200).json(response);
        })
        
    });
};