
document.querySelector('#btnc').onclick=function(){
    let tempf=Number(document.querySelector('#temp').value);
    let tempc=5/9*(tempf-32);
    showres(tempc);
    
}

document.querySelector('#btnf').onclick=function(){
    let tempc=Number(document.querySelector('#temp').value);
    let tempf=9/5*tempc+32;
    showres(tempf);
    
}
function showres(result){
    let outpur=document.querySelector('#output');
    outpur.innerHTML=result;
}