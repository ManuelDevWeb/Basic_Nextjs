import { IncomingMessage, ServerResponse } from "http";

import {Database as DB} from '@database'

// Obtener todos los aguacates
const allAvos=async (request: IncomingMessage, response: ServerResponse)=>{
    const db=new DB();
    
    const allEntries=await db.getAll();
    const lenght=allEntries.length;

    response.statusCode=200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({data: lenght, allEntries}));
}

export default allAvos;