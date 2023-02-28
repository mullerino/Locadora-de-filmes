import {prisma} from '../../utils/prisma'
import { ICreateMovie } from './movie.schemas'

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