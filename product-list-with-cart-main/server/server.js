const jsonserver = require("json-server")
const server = jsonserver.create();
const router = jsonserver.router('./data.json');
const middlewares = jsonserver.defaults() 


server.use( middlewares);
server.use(router);

const PORT = 1105;

server.listen(PORT, () => {
    console.log("server is up and running")
})