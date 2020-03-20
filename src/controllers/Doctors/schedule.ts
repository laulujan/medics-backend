import { Request, Response } from 'express';
import {conn} from '../../config/DBConnection';
import moment from 'moment';

export default async (req: Request, res: Response) =>{

  /*
  idDoctor": 1,
	"unabled_hours": {
		"2020-03-17": [
			[10, 10.5], [13, 13.5], [15.5, 16.0]
		],
		"2020-03-18": [
			[11, 11.5], [12, 12.5], [15.5, 16.0]
		]
	},
	"working_hours" : [
		[9, 14],
		[15, 18]
  ]*/
  
    const id: string = req.params.id;
    let workingHours = `SELECT * FROM working_hours WHERE idDoctor=${id}`;

    console.log(workingHours);
    var dateResponse = {
      idDoctor: id,
      unabled_hours: {},
      working_hours: []
    }

    conn.query(workingHours, async function (err, result, fields) {
        if (err) res.status(400).json({});
        console.log(result);
        let format_hours = []
        result.map((rowWorkingHours) => {
          let array_push = []
          array_push[0] = rowWorkingHours.min
          array_push[1] = rowWorkingHours.max
          dateResponse.working_hours.push(array_push);
        });
        
        console.log(dateResponse)
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