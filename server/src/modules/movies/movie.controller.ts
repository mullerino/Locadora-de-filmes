import { FastifyRequest } from "fastify"
import { ICreateMovie, IDeleteMovie, IGetMovies, IUpdateMovie } from "./movie.schemas"
import { createMovie, deleteMovie, getMovies, updateMovie } from "./movie.service"
import { IByIdParam } from "../../utils/idType"

export const registerMovieHandler = async (req: FastifyRequest <{Body: ICreateMovie}>)=>{
    const body = req.body
    const registerMovie = await createMovie(body)

    return registerMovie
}

export const getMoviesHandler = async () =>{
    const getAllMovies = await getMovies()

    return getAllMovies
}

export const deleteMovieHandler = async (req: FastifyRequest <{ Params: IByIdParam}>)=>{
    const { id } = req.params
    const deleteOneMovie = await deleteMovie(id)

    return deleteOneMovie
}

export const updateMovieHandler = async( req: FastifyRequest <{Body: IUpdateMovie, Params: IByIdParam}>) =>{
    const { id } = req.params
    const body = req.body

    const updateOneMovie = await updateMovie(body, id)
    return updateOneMovie
}