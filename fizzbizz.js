let number = Number.parseInt( prompt(" enter the number"));
 for(let a=1;a<number;a++){
         if (a%3===0){
            console.log("fizz\n");
            }else if (a%5===0){
                console.log("buzz\n");
            }else if(a%3 === 0 &&  a%5 === 0){
                console.log("fizz bizz");
            }else{
                console.log(a)                
            }
 }