var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name +". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}

function nowServing(){
  if (katzDeliLine === []){
    return "There is nobody waiting to be served!";
  }else {
    return "Currently serving" + katzDeliLine[0]+".";

  }

}

function currentLine(line){

}
