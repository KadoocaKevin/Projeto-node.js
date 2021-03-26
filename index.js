//#######   Importações   #########
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

const commentsModel = require('./database/Comments');
const { raw, text } = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
const cors=require('cors')
app.use(cors())

//###### Database #########
connection
    .authenticate()
    .then(()=>{
        console.log('Conexão com banco de dados');
    })
    .catch((error)=>{console.log(error)});

//####### puxando as importações #####
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//#######  Rotas ##########
app.post('/registerComment', (req,res)=>{
    let description = req.body.description
    commentsModel.create({
      description
    }).then(()=>{
      console.log("Comentário criado com sucesso!")
      res.redirect("/listComment")
    })
});

app.get('/listComment', (req,res)=>{
   commentsModel.findAll({raw:true}).then(comments =>{ 
     console.log(comments)
     res.render('index', {
      comments:comments,
     
  }); 
  })

  
});


//########  Servidor  ########
app.listen(8081,() => console.log("Servidor Rodando na Porta 8081"));
