alert('BEM VINDO AO CURSO!');
const name = prompt('Coloque seu nome')


const answer = prompt('Coloque o número correspondente a sua resposta.\nQuer iniciar o teste?\n 1. Sim\n 2. Não')
document.write("Olá " + name +"!!")

if (answer == 1) {
    
    switch(prompt('Quanto é 2+2?\n 1. 4\n 2. 6\n 3. 10\n')){
        case '1':
        document.getElementById('correct1').innerHTML = 'Resposta 1'
        break;
        case '2':
        document.getElementById('incorrect1').innerHTML = 'Resposta 1'
        break;
        case '3':
        document.getElementById('incorrect1').innerHTML = 'Resposta 1'
        break;
        default:
    console.log('Essa resposta não existe');
    }

   switch(prompt('Quanto é 5+7?\n 1. 12\n 2. 15\n 3. 16\n')){
       case '1':
        document.getElementById('correct2').innerHTML = 'Resposta 2'
        break;
        case '2':
        document.getElementById('incorrect2').innerHTML = 'Resposta 2'
        break;
        case '3':
        document.getElementById('incorrect2').innerHTML = 'Resposta 2'
        break;
        default:
    console.log('Essa resposta não existe');
   }

    switch(prompt('Quanto é 5+10?\n 1. 18\n 2. 17\n 3. 15\n')){
         case '1':
         document.getElementById('incorrect3').innerHTML = 'Resposta 3'
         break;
         case '2':
         document.getElementById('incorrect3').innerHTML = 'Resposta 3'
         break;
         case '3':
         document.getElementById('correct3').innerHTML = 'Resposta 3'
         break;
         default:
     console.log('Essa resposta não existe');
        
   }
    
        
}
    

 
/*
switch (prompt('Como está o clima?')) {
  case 'chuvoso':
    console.log('Lembre-se de levar um guarda-chuva.');
    break;
  case 'ensolarado':
    console.log('Vista roupas leves.');
  case 'nublado':
    console.log('Saia para a rua.');
    break;
  default:
    console.log('Tipo de tempo desconhecido.');
    break;
 /*   document.getElementById("innerHTMLtxt").textContent = document.getElementById("txt").innerHTML
document.getElementById("textContenttxt").textContent = document.getElementById("txt").textContent*/
