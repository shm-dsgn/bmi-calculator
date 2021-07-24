function myFunction() {
  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  if(Number.isNaN(weight)||Number.isNaN(height)){
    document.getElementById("result").innerHTML = "Error. Try Again";
  }
  else{
    var value= (weight*10000)/(height*height);
    value = value.toFixed(2);
    if (value<18.5) {
      document.getElementById("result").style.color = "#DFBB00"
    }
    if (value>18.5 && value<=25) {
      document.getElementById("result").style.color = "#00B01C"
    }
    if (value>25 && value<=30) {
      document.getElementById("result").style.color = "#DD7700"
    }
    if (value>30) {
      document.getElementById("result").style.color = "#DD0000"
    }
    document.getElementById("result").innerHTML = "Your BMI : " + value;
  }
}
