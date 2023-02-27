import { FastifyRequest } from "fastify"
import { ICreateMovie, IGetMovies } from "./movie.schemas"
import { createMovie, getMovies } from "./movie.service"

export const registerMovieHandler = async (req: FastifyRequest <{Body: ICreateMovie}>)=>{
    const movie = await createMovie(req.body)

    return movie
}

export const getMoviesHandler = async () =>{
    const getAllMovies = await getMovies()

    return getAllMovies
}