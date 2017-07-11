import { Router, Request, Response, NextFunction } from 'express';

export class IndexController {

    public get(req: Request, res: Response, next: NextFunction) {
       res.json({
        message: 'You are at the root level of Application! movies API URL http://localhost:3000/api/v1/movies'
      });
    }
}


export default new IndexController();