module.exports={
    ItisFizz(num){
        return num%3==0;
    },
    ItisBuzz:function(num){
        return num%5==0;
    },
    ItisFizzBuzz:function(num){
        return this.ItisBuzz(num)&&this.ItisFizz(num);
    }

}
function fizzbuzz () {
    for(i = 0; i < 100; i++) 
    {
        if (i % 3 === 0 && i % 5 === 0)
        {
          console.log("FizzBuzz");                    
        }
        else 
          if(i % 3 === 0)
          {
            console.log("Fizz");
          }
          else 
            if(i % 5 === 0)
            {
              console.log("Buzz");
            }
            else
              console.log(i);
    }
  }
  
  fizzbuzz()