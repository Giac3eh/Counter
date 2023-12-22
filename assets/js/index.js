let count = 0;
const result = document.querySelector("#result");
const increaseOne = document.querySelector("#increaseOne");
const decreaseOne = document.querySelector("#decreaseOne");
const resetBtn = document.querySelector("#resetBtn");
const increaseByNumber = document.querySelector("#increaseNumber");
const decreaseByNumber = document.querySelector("#decreaseNumber");
const choosenNumber = document.querySelector("#choosenNumber");

//increase btn by 1
increaseOne.addEventListener("click", ()=> {
    count += 1;
    result.innerHTML = count.toLocaleString("en-US");
});
//decrese btn by 1
decreaseOne.addEventListener("click", ()=> {
    count -= 1;
    result.innerHTML = count.toLocaleString("en-US");
});
//reset btn
resetBtn.addEventListener("click", ()=> {
    count = 0;
    result.innerHTML = count;
    choosenNumber.value = "";
});

//increase btn by #
increaseByNumber.addEventListener("click", ()=> {
    let number = Number(choosenNumber.value);
    if(number != ""){
        count += number;
        result.innerHTML = count.toLocaleString("en-US");
    }else{
        result.innerHTML = "Choose Number";
    }
});
//decrease btn by #
decreaseByNumber.addEventListener("click", ()=> {
    let number = Number(choosenNumber.value);
    if(number != ""){
        count -= number;
        result.innerHTML = count.toLocaleString("en-US");
    }else{
        result.innerHTML = "Choose Number";
    }
});




