var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name +". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}

function nowServing(){
  return "There is nobody waiting to be served!";
}

function currentLine(line){

}
