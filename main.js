// var meuTitulo = document.querySelector("h1");
// meuTitulo.innerHTML = "Curso de JS";

var myImg = document.querySelector('img');

myImg.onclick = function() {
	var mySrc = myImg.getAttribute('src');
	if(mySrc === '01.jpg'){
		myImg.setAttribute('src','02.jpg');
	}else{
		myImg.setAttribute('src', '01.jpg');
	}
}

var meuBotao = document.querySelector('button');
var meuTitulo = document.querySelector('h1');

function setarUsuario() {
	var nome = prompt('Por favor entre com seu nome.');
	localStorage.setItem('name', nome);
	meuTitulo.innerHTML = 'Bem vindo, ' + nome;
}

if (!localStorage.getItem('name')) {
	setarUsuario();
}else{
	var storedName = localStorage.getItem('name');
	meuTitulo.innerHTML = 'Bem vindo, ' + storedName;
}

meuBotao.onclick = function() {
	setarUsuario();
}