module.exports={
    ItisFizz(num){
        return num%3==0;
    },
    ItisBuzz:function(num){
        return num%5==0;
    },
    ItisFizzBuzz:function(num){
        return this.ItisBuzz(num)&&this.ItisFizz(num);
    },
    CalculatingFizzBuzz:function(num){

        switch(true){
        case (this.ItisFizz(num) && this.ItisBuzz(num)): 
          resultFizzBuzz="FizzBuzz";  
          break;  
        case this.ItisFizz(num):
          resultFizzBuzz="Fizz";
          break;
        case this.ItisBuzz(num):
          resultFizzBuzz="Buzz";
          break;
        default:
          resultFizzBuzz=num;
          break;
        }
    
        return resultFizzBuzz;
      }

}
