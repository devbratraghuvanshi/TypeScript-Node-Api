import {Router, Request, Response, NextFunction} from 'express';
import {MovieController} from './../controller/movieController'
const ctrl = new MovieController();

export class MovieRouter {
  router: Router
  controller: MovieController;

  constructor() {
    this.controller = ctrl;
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get('/', this.controller.getAllMovies);
    this.router.get('/:id', this.controller.getById);
  }

}

export default new MovieRouter().router;