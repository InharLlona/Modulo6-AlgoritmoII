


//////CREAR HTML DE FORMA DINAMICA
function crearelementos (felemento,fclase,fidentificador,fcontenedor){
    var tArea = document.createElement(felemento);
    tArea.setAttribute("class",fclase);
    tArea.setAttribute("id",fidentificador);
    var elemento = document.getElementById(fcontenedor);
    elemento.appendChild(tArea);
} 
//////Creamos los contenedores
crearelementos ("div","cContenedor","idContenedor1","idTotal");
crearelementos ("div","cContenedor","idContenedor2","idTotal");
crearelementos ("div","cContenedor","idContenedor3","idTotal");

crearelementos ("textarea","cText","idText1","idContenedor1");
crearelementos ("button","cButton","idButton1","idContenedor2");
crearelementos ("button","cButton","idButton2","idContenedor2");
crearelementos ("textarea","cText","idText2","idContenedor3");

//////Escribimos codigos especiales
document.getElementById("idButton1").innerText= String.fromCharCode(0x2193)+"Encriptar"+String.fromCharCode(0x2193);
document.getElementById("idButton2").innerText= String.fromCharCode(0x2191)+"Decriptar"+String.fromCharCode(0x2191);

//////Renglas de encriptamiento
var plainAlphabet = " abcdefghijklmnopqrstuvwxyz:()!¡,'ñ";
var encryptedAlphabet = " qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnmñ";

//////Eventos
document.getElementById("idButton1").addEventListener("click",()=>encriptar (document.getElementById("idText1").value,plainAlphabet,encryptedAlphabet))
document.getElementById("idButton2").addEventListener("click",()=>encriptar (document.getElementById("idText2").value,encryptedAlphabet,plainAlphabet))

document.getElementById("idText1").addEventListener("keyup",()=>limpiar ("2"))
document.getElementById("idText2").addEventListener("keyup",()=>limpiar ("1"))

function encriptar (text,origen,destino){
    var textd = [];
    for(i=0;i<text.length;i++){
        for(j=0;j<plainAlphabet.length;j++){
            if(text[i]==origen[j]){
                textd[i]=destino[j];
            }
        }
    }
    var textdt = "";
    for(i=0;i<textd.length;i++){
        textdt=textdt + textd[i];
    }
    if(origen === plainAlphabet){
    document.getElementById("idText2").value = textdt;
    }else if(origen === encryptedAlphabet){document.getElementById("idText1").value = textdt;}
}

function limpiar (bloque) {
    document.getElementById("idText" +bloque).value = "";
}


////////////////////SEGUNDA PARTE GENERADOR DE NUMEROS ALEATORIOS
console.log(randomPick (6, 1, 49)); // Apuesta automática de la primitiva
console.log( randomPick (15, 1, 15)); // Escoge combinación de bolas de billar
console.log( randomPick (1, 1, 6)); // Tirada aleatoria de un dado

function randomPick (cantidad, min, max){
    var i = 0;
    var array = [];
    var ok = true;
        do{
           num = Math.trunc( Math.random() * ((max+1)-min) + 1);//REALIZAR EL TRUNACADO PROMERO PARA QUE COINDAN, SI NO ES PRACTICAMENTE  IMPOSIBLE
           for(j=0;j<=i; j++){
               if(num === array[j]){
                   ok = false;} 
           }
           if(ok){
               array[i] = num;
               i++;     
            }else{ok=true}
        }while (i<cantidad) 
    return array;
}





