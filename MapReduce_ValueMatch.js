var stringArray = ["User1 ACGT", "User2 TGCA", "User3 ACG", "User4 ACGT", "User5 ACG", "User6 AGCT"];

var keyVal = {};

function mapRed(valIn){
  
  //format the input to make key/value pairs
  var inputVals = valIn;
  
  for(var i = 0; i < inputVals.length; i++){
    var k1 = 0;
    var v1 = 0;
    var temp = inputVals[i].split(" ");
    for(var x = 0; x < temp.length; x++){
      if(x === 0){
        v1 = temp[x];
      }else {k1 = temp[x];}
    } //end for x
    
    if(keyVal.hasOwnProperty(k1)){
      keyVal[k1] += " " + v1;
    }else{keyVal[k1] = v1;}
  } //end for i
  
  return keyVal;
  
} //end function

mapRed(stringArray);
console.log(keyVal);