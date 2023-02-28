import { FastifyInstance } from "fastify";
import { deleteMovieHandler, getMoviesHandler, registerMovieHandler } from "./movie.controller";
import { $ref } from "./movie.schemas";

export const movieRoutes = async(server: FastifyInstance)=>{
    server.post("/register", {
        schema: {
            body: $ref('createMovieSchema'),
            response: {
                201: $ref('createMovieResponse')
            }
        }
    }, registerMovieHandler)

    server.get('/', {
        schema: {
            response: {
                201: $ref('getMovieResponse')
            } 
        }
    }, getMoviesHandler)

    server.delete('/:id', {
        schema: {
            response: {
                201: $ref('deleteMovieResponse')
            }
        }
    }, deleteMovieHandler)
}