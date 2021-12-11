
import { NextApiRequest, NextApiResponse } from 'next';

import {Database as DB} from '@database'

// Obtener aguacate por id
const getAvo=async(request: NextApiRequest, response: NextApiResponse)=>{
    const db=new DB();
    // El id del query viene en el path
    const id=request.query.id

    const entry=await db.getById(id as string);

    // response.statusCode=200
    // response.setHeader('Content-Type', 'application/json')
    // response.end(JSON.stringify({data: entry}));

    // Reemplaza el código anterior
    response.status(200).json(entry);
}

export default getAvo;