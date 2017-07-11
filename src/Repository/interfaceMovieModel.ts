import { mongoose } from './../dbConfig/db';
import { IMovie } from './interfaceMovie';

//This IMovieModel now can be passed as a type argument for Mongoose's model function
export interface IMovieModel extends IMovie, mongoose.Document { }