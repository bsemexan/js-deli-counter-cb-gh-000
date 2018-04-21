var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli = katzDeliLine.push(name)
  return "Welcome, " + name +". You are number " + (katzDeliLine.indexOf(name) + 1) + " in line.";
}

function nowServing(line){
  if (line.length < 1){
    return "There is nobody waiting to be served!";
  }
    return "Currently serving " + line.shift()+".";
    katzDeli.unshift();
}

function currentLine(line){

}
