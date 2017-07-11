import { Router, Request, Response, NextFunction } from 'express';

import { Movie } from './../Repository/movieRepository';

export class MovieController {

  /**
   * GET all movies.
   */
  public getAllMovies(req: Request, res: Response, next: NextFunction) {

    Movie.find((error, movies) => {
      if (error) {
        res.status(500);
        res.send("internal server error");
      } else {
        res.status(200);
        res.send(movies);
      }
    });
  }

  /**
 * GET one movie by id
 */
  public getById(req: Request, res: Response, next: NextFunction) {
    Movie.findById(req.params.id, (error, movie) => {
            if (error) {
                res.status(500);
                res.send("internal server error");
            } else {
                res.status(200);
                res.send(movie);
            }
        });
  }
}

export default MovieController;