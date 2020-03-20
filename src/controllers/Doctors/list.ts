import { Request, Response } from 'express';
import {conn} from '../../config/DBConnection';

export default (req: Request, res: Response) =>{

    const lat: string = req.params.lat;
    const lng: string = req.params.lng;
    const keyword: string = req.params.keyword;

    let endpoint = `SELECT *, (3959 * acos(cos(radians('${lat}')) * cos(radians(lat)) * cos( radians(lng) - radians('${lng}')) + sin(radians('${lat}')) * 
    sin(radians(lat)))) AS distance FROM doctors  WHERE name LIKE '%${keyword}%' ORDER BY distance ASC LIMIT 12`;

    conn.query(endpoint, function (err, result, fields) {
        if (err) res.status(400).json({});;
        console.log(result);
        res.status(200).json(result);
    });
};