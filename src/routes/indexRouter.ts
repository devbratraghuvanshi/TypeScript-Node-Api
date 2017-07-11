import {Router, Request, Response, NextFunction} from 'express';
import IndexController from './../controller/IndexController'
import movieRouter  from './movieRouter';

export class IndexRouter {
  router: Router

  /**
   * Initialize the indexRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', IndexController.get);
    this.router.use('/api/v1/movies', movieRouter);
  }

}
// Create the HeroRouter, and export its configured Express.Router
export default new IndexRouter().router;
