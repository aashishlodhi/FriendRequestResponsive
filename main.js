var flag=0;

document.querySelector('#card button')
document.addEventListener("click",function(){
    if(flag===0){
        document.querySelector("h4").textContent="Friend";
        document.querySelector("h4").style.color="rgb(7, 171, 59)";
        document.querySelector("button").textContent="Remove Friend";
        document.querySelector("button").style.backgroundColor="rgb(227, 61, 61)";
        flag=1;
    }
    else{
        document.querySelector("h4").textContent="Stranger";
        document.querySelector("h4").style.color="rgb(200, 38, 38)";
        document.querySelector("button").textContent="Add Friend";
        document.querySelector("button").style.backgroundColor=" rgba(18, 60, 230, 0.893)";
        flag=0;

    }

})
