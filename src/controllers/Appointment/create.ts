import { Request, Response } from 'express';
import {conn} from '../../config/DBConnection';

export default (req: Request, res: Response) =>{

  /*
  hora: hour.target.value,
      fecha: selectedDate,
      idDoctor: props.schedule.idDoctor
      */
    const hora: string = req.body.hora;
    const fecha: string = req.body.fecha;
    const idDoctor: string = req.body.idDoctor;
    const idUser = 1;

    let insert = `INSERT INTO appointments (idDoctor, idUser, selected_date, hour_init, hour_end, canceled) VALUES (${idDoctor}, ${idUser}, '${fecha}', ${hora}, ${hora+1}, 0)`;

    conn.query(insert, function (err, result, fields) {
        if (err) res.status(400).json({});;
        res.status(201).json({
          "status": "ok"
        });
    });
};