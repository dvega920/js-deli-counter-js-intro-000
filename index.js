
function takeANumber(katzDeliLine, name){
	katzDeliLine.push(name)
	return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  var firstPerson = [];
	if (katzDeliLine.length < 1){
		return `There is nobody waiting to be served!`
	} else {
	  firstPerson.push(katzDeliLine[0]);
	  katzDeliLine.shift();
	  return `Currently serving ${firstPerson}.`
	}
}

