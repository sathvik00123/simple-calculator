let currValue = "";
let arr = [];

const getNumber = (num) => {
    currValue += num;
    document.getElementById("display").innerText = currValue;
    console.log(currValue)
}

const opr = (op) => {
    currValue += op;
    document.getElementById("display").innerText = currValue;
}
    
const calculate = () => {
    for(let i=0;i<currValue.length;i++){
        if(currValue.charAt(i) == '+'){
            arr = currValue.split('+');
            if(arr.length == 2){
                currValue = Number(arr[0]) + Number(arr[1]) + "";  
            }
        }else if(currValue.charAt(i) == '-'){
            arr = currValue.split('-');
            if(arr.length == 2){
                currValue = Number(arr[0]) - Number(arr[1]) + "";  
            }
        }else if(currValue.charAt(i) == 'x'){
            arr = currValue.split('x');
            if(arr.length == 2){
                currValue = (arr[0] * arr[1]) + "";  
            }
        }else if(currValue.charAt(i) == '/'){
            arr = currValue.split('/');
            if(arr.length == 2){
                if(arr[1] == 0){
                    document.getElementById("display").innerText = "ERR";
                    currValue = "";
                }
                currValue = (arr[0] / arr[1]) + "";  
            }
        }
        document.getElementById("display").innerText = currValue;
    }
}

const deleteOne = () => {
    currValue = currValue.substring(0,currValue.length - 1);
    document.getElementById("display").innerText = currValue;
}

const deleteAll = () => {
    currValue = "";
    document.getElementById("display").innerText = currValue;
}