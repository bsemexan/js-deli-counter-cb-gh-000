var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli = katzDeliLine.push(name)
  return "Welcome, " + name +". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}

function nowServing(){
  if (katzDeli.length < 1){
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine[0]+".";
    katzDeliLine.unshift();
  }

}

function currentLine(line){

}
