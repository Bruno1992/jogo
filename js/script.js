/* Var Globais */
var i ='';
var escolhaTemp = '';
var idPerguntaRespondida = [];
var resposta = [];
var erros = 0;
var acertos = 0;

var text = '{ "perguntas" : [' +
'{ "id":"1" , "Pergunta":" Quanto e 2 + 2 ?Quanto e 2 + 2 ? Quanto e 2 + 2 ?Quanto e 2 + 2 ?Quanto e 2 + 2 ?Quanto e 2 + 2 ?Quanto e 2 + 2 ?Quanto e 2 + 2 ?Quanto e 2 + 2 ?Quanto e 2 + 2 ?Quanto e 2 + 2 ?","alternativa1":"1","alternativa2":"2","alternativa3":"3","resposta":"4" },' +
'{ "id":"2" , "Pergunta":" Quanto e 2 + 9 ?Quanto e 2 + 9 ?Quanto e 2 + 9 ?Quanto e 2 + 9 ?Quanto e 2 + 9 ?Quanto e 2 + 9 ?","alternativa1":"3","alternativa2":"17","alternativa3":"4","resposta":"11"  },' +
'{ "id":"3" , "Pergunta":" Quanto e 2 + 711 ?","alternativa1":"3","alternativa2":"2","alternativa3":"710","resposta":"713"  },' +
'{ "id":"4" , "Pergunta":" Quanto e - 2 - 8 ?","alternativa1":"3","alternativa2":"-14","alternativa3":"4","resposta":"-10"  },' +
'{ "id":"5" , "Pergunta":" Quanto e 10 * 10 ?","alternativa1":"200","alternativa2":"2","alternativa3":"4","resposta":"100"  },' +
'{ "id":"6" , "Pergunta":" Quanto e 7 * 7 ?","alternativa1":"3","alternativa2":"449","alternativa3":"4","resposta":"49"  },' +
'{ "id":"7" , "Pergunta":" Quanto e 2 + 5 ?","alternativa1":"3","alternativa2":"2","alternativa3":"4","resposta":"7"  },' +
'{ "id":"8" , "Pergunta":" Quanto e 2 + 6 ?","alternativa1":"1","alternativa2":"2","alternativa3":"3","resposta":"8"  } ]}';
var objPergunta = JSON.parse(text);

gabarito = new Array ("a", "b", "c");

/*-=-----------*/    
window.onload = function(){
  getXMLHttp();	
  MakeRequest();
  var i = (radom(0,7));   


  document.getElementById('idPergunta').value = objPergunta.perguntas[i].id;  
  document.getElementById('quadro_pergunta').textContent = objPergunta.perguntas[i].Pergunta;	
  document.getElementById('resposta1_txt').textContent = objPergunta.perguntas[i].alternativa1;	
  document.getElementById('resposta2_txt').textContent = objPergunta.perguntas[i].alternativa2;		
  document.getElementById('resposta3_txt').textContent = objPergunta.perguntas[i].alternativa3;		
  document.getElementById('resposta4_txt').textContent = objPergunta.perguntas[i].resposta;



  confirmar.onclick = function() {
    confirma();
  } 

  resposta1_txt.onclick = function() {
    escolha('resposta1_txt');

  }    
  resposta2_txt.onclick = function() {
    escolha('resposta2_txt');
  }     
  resposta3_txt.onclick = function() {
    escolha('resposta3_txt');
  }     
  resposta4_txt.onclick = function() {
    escolha('resposta4_txt');
  }           
}



function escolha(n){
  fundoPadrao();
  document.getElementById(n).style.backgroundColor = '#bde955';
  var valorR = document.getElementById(n).textContent;
  escolhaTemp = valorR;

}

function confirma(){

   // vetor com as questões respondidas
   resposta.push(escolhaTemp);
   var valorP = document.getElementById('idPergunta').value;
   idPerguntaRespondida.push(valorP);
   
   var i = indexofjson(valorP);

   if(trim(objPergunta.perguntas[i].resposta) == trim(escolhaTemp)){
   	alert('parabens acertou');
   	acertos = acertos + 1;
   	document.getElementById('acertos').textContent = acertos;
   }
   else
   {
   	alert('errou');
   	erros = erros + 1;
   	document.getElementById('erros').textContent = erros;
   }
   // criar um array com as 
   fundoPadrao();
   var i = (radom(0,7));   
   var pos = (radom(1,4));
 //var valor = idPerguntaRespondida.indexOf(i);
 alert(pos);
 switch(pos) {
  case 1:
  pos1='resposta4_txt';
  pos2='resposta3_txt';
  pos3='resposta2_txt';
  pos4='resposta1_txt';
  break;
  case 2:
  pos1='resposta3_txt';
  pos2='resposta4_txt';
  pos3='resposta1_txt';
  pos4='resposta2_txt';
  break;
  case 3:
  pos1='resposta2_txt';
  pos2='resposta1_txt';
  pos3='resposta4_txt';
  pos4='resposta3_txt';
  break;
  default:
  pos1='resposta1_txt';
  pos2='resposta2_txt';
  pos3='resposta3_txt';
  pos4='resposta4_txt';
  break;
}
document.getElementById('idPergunta').value = objPergunta.perguntas[i].id;  
document.getElementById('quadro_pergunta').textContent = objPergunta.perguntas[i].Pergunta;  
document.getElementById(pos1).textContent = objPergunta.perguntas[i].alternativa1;  
document.getElementById(pos2).textContent = objPergunta.perguntas[i].alternativa2;    
document.getElementById(pos3).textContent = objPergunta.perguntas[i].alternativa3;    
document.getElementById(pos4).textContent = objPergunta.perguntas[i].resposta;

}
function fundoPadrao(){
  document.getElementById('resposta1_txt').style.backgroundColor = '#d4b67d';
  document.getElementById('resposta2_txt').style.backgroundColor = '#d4b67d';
  document.getElementById('resposta3_txt').style.backgroundColor = '#d4b67d';
  document.getElementById('resposta4_txt').style.backgroundColor = '#d4b67d';
}
/*---function de ajuda---*/
function trim(str) {
	return str.replace(/^\s+|\s+$/g,"");
}
function indexofjson(n){
	i = objPergunta.perguntas.length ;
	while( i-- ) {
    if( objPergunta.perguntas[i].id === n ) break;
  }
  return i;
}

function radom(low, high){
 return Math.floor(Math.random() * (high - low + 1) + low);
}

/*--- getPergunta web service ---*/

function getXMLHttp()
{
  var xmlHttp
  try
  {
    //Firefox, Opera 8.0+, Safari
    xmlHttp = new XMLHttpRequest();
  }
  catch(e)
  {
    //Internet Explorer
    try
    {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch(e)
    {
      try
      {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch(e)
      {
        alert("Your browser does not support AJAX!")
        return false;
      }
    }
  }
  return xmlHttp;
}

function MakeRequest()
{
  var xmlHttp = getXMLHttp();

  xmlHttp.onreadystatechange = function(){
    if(xmlHttp.readyState == 4)
    {
      xmlHttp.onreadystatechange = handler;
    }
  }
  url = "http://54.207.64.205/php/controller/perguntas_json.php";
  xmlHttp.open("POST",url, true); 
  
  console.log(xmlHttp);
  xmlHttp.send(null);

}