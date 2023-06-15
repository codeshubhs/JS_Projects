// logic of js behind random color generator 
const getcolor =()=>{
    const randomnumber= Math.floor(Math.random()*16777215);
    //Math.floor(Math.random()*16777215);
    //console.log(randomnumber);
    const rendomcode= "#"+randomnumber.toString(16);

 document.body.style.background=rendomcode;
 document.getElementById("colorcode").innerText=rendomcode;
navigator.clipboard.writeText(randomcode);

}
 // event call i can call through document.addEventListener
document.addEventListener
("click", 
getcolor);
