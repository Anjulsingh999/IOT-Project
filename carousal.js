var counter = 2;

setInterval(function(){
  document.getElementById('btn' + counter).click();
  counter++;
  // console.log(counter);
  if (counter == 7){
    counter = 1;
  }
}, 6000);