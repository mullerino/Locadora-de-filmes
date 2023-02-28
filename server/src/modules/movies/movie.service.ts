import { IByIdParam } from '../../utils/idType'
import {prisma} from '../../utils/prisma'
import { ICreateMovie, IUpdateMovie } from './movie.schemas'

export const createMovie = async (data: ICreateMovie) =>{
    return prisma.movie.create({
        data
    })
}

export const getMovies = async () =>{
    return await prisma.movie.findMany()
}

export const deleteMovie = async (idMovie: string)=>{
    return await prisma.movie.delete({
        where: {
            id: idMovie
        }
    })
}

export const updateMovie = async(data: IUpdateMovie, idMovie: string) =>{
    return await prisma.movie.update({
        where: {
            id: idMovie
        },
        data: {
            ...data
        }
    })
}