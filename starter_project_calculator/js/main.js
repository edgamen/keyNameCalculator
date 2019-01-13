// calculator

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