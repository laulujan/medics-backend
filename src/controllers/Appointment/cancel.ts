import { Request, Response } from 'express';
import {conn} from '../../config/DBConnection';

export default (req: Request, res: Response) =>{

    const id = req.params.id;

    let update = `UPDATE appointments SET canceled=1 WHERE  id = ${id} `

    conn.query(update, function (err, result, fields) {
        if (err) res.status(400).json({});;
        res.status(200).json({
          "status": "ok"
        });
    });
};