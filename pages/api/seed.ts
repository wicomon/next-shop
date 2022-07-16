import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedDataBase } from '../../database'
import { Product } from '../../models'

type Data = {
  message: string
}

export default async function (req: NextApiRequest, res: NextApiResponse<Data>) {

  if (process.env.NODE_ENV !== 'development') {
    return res.status(401).json({ message: 'No tiene acceso a este API' })
  }
  await db.connect();

  await Product.deleteMany({});
  await Product.insertMany(seedDataBase.initialData.products);

  await db.disconnect();

  res.status(200).json({ message: 'Proceso realizado correctamente' })
}