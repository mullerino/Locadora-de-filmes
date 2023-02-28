import { buildJsonSchemas } from 'fastify-zod'
import z from 'zod'

const movieInput = {
    title: z.string(),
    gender: z.string().array(),
    synopsis: z.string(),
    releaseYear: z.number(),
    urlImage: z.string(),
    durationMinutes: z.number(),
    direction: z.string().array(),
    roadMap: z.string().array()
}

const movieGenerated = {
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
}

const createMovieSchema = z.object({
    ...movieInput
})

const createMovieResponse = z.object({
    ...movieInput,
})

const getMovieResponse = z.object({
    ...movieInput,
    ...movieGenerated
})

const deleteMovieSchema = z.object({
    id: z.string()
})

const deleteMovieResponse = z.object({
    ...movieInput
})

export type ICreateMovie = z.infer<typeof createMovieSchema>
export type IGetMovies = z.infer<typeof getMovieResponse>
export type IDeleteMovie = z.infer<typeof deleteMovieSchema>

export const { schemas: moviesSchema, $ref} = buildJsonSchemas({
    createMovieSchema,
    createMovieResponse,
    getMovieResponse,
    deleteMovieResponse
})