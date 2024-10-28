const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const { engine }=require('express-handlebars');
const app=express();


//Template engine
app.engine("handlebars", engine());
app.set('view engine','handlebars');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/bootstrap', express.static('bootstrap'));

// Routes & Templates
app.get("/", function(req,res){
	// Essa é minha pagina inicial
	res.render("index");
});

app.get("/pacientes", function(req,res){
	res.render("pacientes");
});

app.get("/profissionais", function(req,res){
	res.render("profissionais");
});


// Inicia o Servidor na porta 3000
app.listen(3000,function(req,res){
	console.log('Servidor está rodando');
});