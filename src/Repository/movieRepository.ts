import { mongoose } from './../dbConfig/db';
import { IMovieModel } from './interfaceMovieModel';

export let movieSchema = new mongoose.Schema({
        title: String,
        year: String,
        genres: [String],
        ratings: [Number],
        poster: String,
        contentRating: String,
        duration: String,
        releaseDate: String,
        averageRating: Number,
        originalTitle: String,
        storyline:String,
        actors: [String],
        imdbRating: Number,
        posterurl: String
    }, { collection: 'MovieCollection' });

export let Movie = mongoose.model<IMovieModel>("Movie", movieSchema);

