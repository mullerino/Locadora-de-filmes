import Fastify from "fastify";
import { movieRoutes } from "./modules/movies/movie.route";
import { moviesSchema } from "./modules/movies/movie.schemas";

const server = Fastify()


const main = async()=>{
    server.register(movieRoutes, {prefix: "/api/movies"})

    for( const schema of moviesSchema){
        server.addSchema(schema)
    }

    try{
        await server.listen({port: 3000})
        console.log('Server online na porta 3000')
    }catch (e){
        console.error(e)
        process.exit(1)
    }
}

main()