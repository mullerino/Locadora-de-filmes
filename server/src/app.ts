import Fastify from "fastify";

const server = Fastify()

server.get('/', ()=>{
    return {
        message: 'Deu bom'
    }
})

const main = async()=>{
    try{
        await server.listen({port: 3000})
        console.log('Server online na porta 3000')
    }catch (e){
        console.error(e)
        process.exit(1)
    }
}

main()