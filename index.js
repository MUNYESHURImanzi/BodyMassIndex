var form=document.querySelector("form")


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    var height=parseFloat(document.querySelector("#height").value)
    var mass= parseFloat(document.querySelector("#mass").value)
    var bodymass= mass/(height*height)
    console.log(bodymass);
   
     var b=document.querySelector(".output h1");
    b.innerHTML=bodymass
    if (bodymass<=18.5) {
       var under= document.querySelector(".not p")
       under.innerHTML=" Underweight: Your BMI is less than 18.5 "
        
    }
    else if (bodymass>=18.5 && bodymass<=24.9) {
          
        var under= document.querySelector(".not p")
        under.innerHTML="  Healthy weight: Your BMI is 18.5 to 24.9"
    } 
    else if (bodymass>=25 && bodymass<=29.9 ) {
          
        var under= document.querySelector(".not p")
        under.innerHTML="   Overweight: Your BMI is 25 to 29.9"
    } 
    else if (bodymass>=30  ) {
          
        var under= document.querySelector(".not p")
        under.innerHTML="    Obese:  Your BMI is 30 or higher "
    } 
    else {
        
    

    }


    return bodymass.toFixed(2) 



}

)





