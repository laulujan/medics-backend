import { Request, Response } from 'express';
import {conn} from '../../config/DBConnection';

export default (req: Request, res: Response) =>{

    const idUser: string = req.params.idUser;

    let endpoint = `SELECT * FROM appointments INNER JOIN doctors ON doctors.id = appointments.idDoctor WHERE appointments.idUser = ${idUser} ;`;

    conn.query(endpoint, function (err, result, fields) {
        if (err) res.status(400).json({});;
        console.log(result);
        res.status(200).json(result);
    });
};