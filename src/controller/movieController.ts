import { Router, Request, Response, NextFunction } from 'express';

import { Movie } from './../Repository/movieRepository';


export class MovieController {

  // use this only one time to add all movies to MongoDb from MoviesData folder
public AddAllMoviesToMongoDB(req: Request, res: Response, next: NextFunction) {
   // drop old collection from Mongo db
    Movie.collection.drop();

    //read data from MoviesData folder and add to collection in mongo db
    let mComingSoon = require('./../MovieData/movies-coming-soon.json');
    let mTheaters = require('./../MovieData/movies-in-theaters.json');
    let mIndian1 = require('./../MovieData/top-rated-indian-movies-01.json');
    let mIndian2 = require('./../MovieData/top-rated-indian-movies-02.json');
    let mTopRated1 = require('./../MovieData/top-rated-movies-01.json');
     let mTopRated2 = require('./../MovieData/top-rated-movies-02.json');
    Movie.collection.insert(mComingSoon);
    Movie.collection.insert(mTheaters);
    Movie.collection.insert(mIndian1);
    Movie.collection.insert(mIndian2);
    Movie.collection.insert(mTopRated1);
    Movie.collection.insert(mTopRated1);
    res.send("data added")
  }
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