function firstChar(text) {
  // your code here
	for(let i=0; i<text.length; i++){
		if(text[i]==" "){
			continue
		}else if (text.length==0){
			return "empty String"
		}else{
			return text[i]
		}
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
