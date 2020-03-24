import { Request, Response } from 'express';
import {conn} from '../../config/DBConnection';
import moment from 'moment';

export default async (req: Request, res: Response) =>{

    const id: string = req.params.id;
    let workingHours = `SELECT * FROM working_hours WHERE idDoctor=${id}`;

    var dateResponse = {
      idDoctor: id,
      unabled_hours: {},
      working_hours: []
    }

    conn.query(workingHours, async function (err, result, fields) {
        if (err) res.status(400).json({});
        result.map((rowWorkingHours) => {
          let array_push = []
          array_push[0] = rowWorkingHours.min
          array_push[1] = rowWorkingHours.max
          dateResponse.working_hours.push(array_push);
        });
        
        let currenTDATE = moment().format('YYYY-MM-DD');
        let unabledHours = `SELECT * FROM appointments WHERE idDoctor=${id} AND selected_date >= '${currenTDATE}'`;
        //let unabledHours = `SELECT * FROM appointments WHERE idDoctor=${id} LIMIT 1`;
        await conn.query(unabledHours, function (err, result, fields) {
          if (err) res.status(400).json({});

          result.map((rowUnabledHours) => {
            let dateWithFormat =  moment(rowUnabledHours.date).format('YYYY-MM-DD');
            if (dateWithFormat in dateResponse.unabled_hours) {
              dateResponse.unabled_hours[dateWithFormat].push([rowUnabledHours.hour_init, rowUnabledHours.hour_end])
            } else {
              dateResponse.unabled_hours[dateWithFormat] = [];
              dateResponse.unabled_hours[dateWithFormat].push([rowUnabledHours.hour_init, rowUnabledHours.hour_end])
            }
          });

          res.status(200).json(dateResponse);
        });

        
    });

    

    
  }