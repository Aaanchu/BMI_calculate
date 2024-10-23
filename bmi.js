const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');
    if(height===' '||height<0||isNaN(height)){
        result.innerHTML=`Please give valid height ${height}`;
    } else  if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML=`Please give valid weight ${weight}`;
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        // result.innerHTML=`<span>${bmi}</span>`;
        if(bmi<18.6){
            result.innerHTML=`<span>${bmi}</span> Under Weight`
        } else if(bmi >24.9){
            result.innerHTML=`<span>${bmi}</span> Over Weight `
        } else{
            result.innerHTML=`<span>${bmi}</span> Normal Range`
        }
    }
})