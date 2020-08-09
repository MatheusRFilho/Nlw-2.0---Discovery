const express = require('express'); 
const server = express();

const {
    pageGiveClass,
    pageStudy,
    pageLanding,
    saveClasses
} = require('./pages')

//configurar jnunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express:server,
    noCache: true,
});

//Configurar arquivos estaticos
server.use(express.static("public"))
.use(express.urlencoded({ extended: true}))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClass)
.post("/save-classes",saveClasses)
.listen(5500);

