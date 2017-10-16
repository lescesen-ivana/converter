//This program converts BAM to EUR, HRK and USD

//Declare variable at the beginging of the program
const EUR = 1.95583;
const HRK = 3.84;
const USD = 0.61;

//The following function accept one parametar the ammount of marks to be converted 
//which is then converted and a copy of the variable message is returned to be used elsewhere in the program

function convertToEuro (marksToConvert) {

//Checking if the entered value is numeric if not an explanation appears

	if (isNaN(marksToConvert)){ 
		return "Wrong format, only numeric value are accepted";	
	}

	else{
	 	const marks = marksToConvert; 
        const conToEuro = marks * EUR;
        const message = marks + " KM is " + conToEuro + " EUR";
        return message;
    } 

}


function convertToDolars (marksToConvert) {


	if (isNaN(marksToConvert)){ 
		return "Wrong format, only numeric values are accepted";	
	}

    else{
	    const marks = marksToConvert;
		const conToDolar = marks * USD;
	    const message = marks + " KM is " + conToDolar + " USD";
		return message;
    }
	
}

function convertToKune (marksToConvert) {

	if (isNaN(marksToConvert)){ 
		return "Wrong format, only numeric value are accepted";	
	}

	else{
		const marks = marksToConvert;
		const conToKune = marks * HRK;
	    const message = marks + " KM is " + conToKune + " HRK";
		return message;
    }
	

}

// The function is called with one argument and the message is printed to the console

console.log(convertToEuro(5));
console.log(convertToDolars(5));
console.log(convertToKune(5));






