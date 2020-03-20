import express, {Application} from 'express';
import { constants } from './src/config/constants'
import entryPoint from './src/app'
import bodyParser from 'body-parser';
const app: Application = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(entryPoint);


app.listen(constants.port, ()=>{
    console.log("servidor iniciado " + constants.port)
});
