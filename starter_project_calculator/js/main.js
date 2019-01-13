// calculator based on Udemy course

//Global vars

var num1="";
var num2="";
var operator;
var flag=0;
var display= document.getElementById('display');
var equalTo=0;

//funcion setNumber(valor)

function setValue(number){
    if(equalTo===1){
        clearButton();
    }
    if(flag===0){
        num1+=number;
        //alert(num1)
        display.innerHTML+=number;
    }else{
        num2+=number;
        display.innerHTML+=number;
    }
    if(num1.length>10||num2.length>10){
        display.innerHTML="Maxima cantidad de digitos ingresados!";
    }
}//fin funcion

// funcion oppClick(codigoNumerico)

function oppClick(numericCode){
    operator=numericCode;
    var oppString="";
    flag=1;
        if(operator === 4){
            display.innerHTML+="/";
            oppString="/";

        }else if(operator === 3){
            display.innerHTML+="*";
            oppString="*";

        }else if(operator === 2){
            display.innerHTML+="-";
            oppString="-";

        }else{
            display.innerHTML+="+";
            oppString="+";

        }//fin del else

        if(flag === 1){
            display.innerHTML=num1+oppString;
        }

        if(flag === 1 && num1 === ""){
            clearButton();
        } //final de if

        if(equalTo === 1){
            clearButton();
        }//fin de if

}//fin funcion

//funcion equalClick
function equalClick(){
    equalTo = 1;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = "";
    var roundedResult = "";

    switch(true){
        case(operator === 1):
        result = num1+num2;
        break;
        case(operator === 2):
        result = num1-num2;
        break;
        case(operator === 3):
        result = num1*num2;
        break;
        case(operator === 4):
        result = num1/num2;
        break;
    } //fin de switch
    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    if(roundedResult === "NaN"){
        display.innerHTML="Operacion no valida!"
    }
}//fin funcion

//funcion clearButton

function clearButton(){
    num1 = "";
    num2 = "";
    flag = 0;
    display.innerHTML = "";
    equalTo = 0;
}//fin funcion

//funcion backspace
function backspace(){
    var temp1 = "";
    var temp2 = "";
    if(equalTo === 1){
        clearButton();
    }//fin del if

    if(flag === 0){
        temp1 = num1.substring(0,num1.length-1);
        display.innerHTML = temp1;
        num1 = temp1;
    }//fin del if

    if(flag === 1){
        display.innerHTML = num1;
        flag = 0;
    }//fin del if

    if(num2 !== ""){
        temp2 = num2.substring(0,num2.length-1);
        display.innerHTML = num1 + operator + num2;
        num2 = temp2;
        flag = 1;

        setOppString();//se elimina bloque condicional y se agrega como funcion

    }//fin del if

}//fin funcion

//funcion setDecimal

function setDecimal(){
    if(flag === 0){
        if(num1 === ""){
            num1 = "0.";
            display.innerHTML = num1;
        }//fin del if uno

        if(num1.indexOf('.') === -1){
            num1 += ".";
            display.innerHTML = num1;
        }//fin del if dos
    }//fin del if
    if(flag === 1){
        if(num2 === ""){
            num2 = "0.";
            display.innerHTML+=num2;
        }//fin de if uno
        if(num2.indexOf('.') === -1){
            num2+=".";
            display.innerHTML = num1 + operator + num2;

            setOppString();
            //comentamos bloque condicional y reemplazamos por la funcion

          /*  if(operator === 1){
                display.innerHTML = num1 + "+" + num2;
            }else if(operator === 2){
                display.innerHTML = num1 + "-" + num2;
            }else if(operator === 3){
                display.innerHTML = num1 + "*" + num2;
            }else if(operator === 4){
                display.innerHTML = num1 + "/" + num2;
            }//fin del if*/

        }//fin de if dos
    }//fin de if

}//fin funcion

//funcion setOppString
function setOppString(){
    if(operator === 1){
        display.innerHTML = num1 + "+" + num2;
    }else if(operator === 2){
        display.innerHTML = num1 + "-" + num2;
    }else if(operator === 3){
        display.innerHTML = num1 + "*" + num2;
    }else if (operator === 4){
        display.innerHTML = num1 + "/" + num2;
    } //fin del if

}//fin de funcion