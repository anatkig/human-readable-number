module.exports = function toReadable (number) {
  const h="hundred";
  const one="one";
    const two="two";
    const three="three";
    const four="four";
    const five="five";
    const six="six";
    const seven="seven";
    const eight="eight";
    const nine="nine";
    let varr=[one,two,three,four,five,six,seven,eight,nine];
    
    let midarr=["ten","eleven", "twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let smarr=[two,three,four,five,six,seven,eight,nine];
    
   const twenty="twenty";
    const thirty="thirty";
    const forty="forty";
    const fifty="fifty";
    const sixty="sixty";
    const seventy="seventy";
    const eighty="eighty";
    const ninety="ninety";
    
    let barr=[twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety];
    
    let l=number.toString().length;
    if(number<20)
        switch(number){
            case 0: return "zero";
            case 1: return "one";
            case 2: return "two;
                case 3: return "three";
            case 4: return "four";
            case 5: return "five;
                case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            case 10: return "ten";
            case 11: return "eleven";
            case 12: return "twelve";
            case 13: return "thirteen";
            case 14: return "fourteen";
            case 15: return "fifteen";
            case 16: return "sixteen";
            case 17: return "seventeen";
            case 18: return "eighteen";
            case 19: return "nineteen;
        }
    else if(number<100&&number%10===0)
      return barr[parseInt(number.toString()[0])-2];
    else if(number<100)
        return barr[parseInt(number.toString()[0])-2]+" " + smarr[parseInt(number.toString()[1]-2];
                                                                           else if(number===100) return "one hundred";
                                                                           else if(number<1000&&number%100<10)
                                                                  return smarr[parseInt(number.toString()[0]-2]+ " " + h+" "+ varr[parseInt(number.toString()[2])-1];
    else if(number<1000&&number%100<20)
        return smarr[parseInt(number.toString()[0]-2]+ " " + h+" "+midarr[parseInt(number.toString()[2]);
                                                                           else if(number<1000)
                                                                  return smarr[parseInt(number.toString()[0]-2]+ " " + h+" "+ barr[parseInt(number.toString()[1])-2]+" " + smarr[parseInt(number.toString()[2]-2];
        
                                                                           
                                                                          
        
}
