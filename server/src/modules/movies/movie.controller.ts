import { FastifyRequest } from "fastify"
import { ICreateMovie, IDeleteMovie, IGetMovies } from "./movie.schemas"
import { createMovie, deleteMovie, getMovies } from "./movie.service"

export const registerMovieHandler = async (req: FastifyRequest <{Body: ICreateMovie}>)=>{
    const registerMovie = await createMovie(req.body)

    return registerMovie
}

export const getMoviesHandler = async () =>{
    const getAllMovies = await getMovies()

    return getAllMovies
}

export const deleteMovieHandler = async (req: FastifyRequest <{Body: IDeleteMovie}>)=>{
    const deleteOneMovie = await deleteMovie(req.body.id)

    return deleteOneMovie
}