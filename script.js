function firstChar(text) {
  // your code here
	for(let i=0; i<text.length; i++){
		if(text[i]==" " && text[i+1]==" "){
			continue
		}else if (text.length==0){
			return "empty String"
		}else if(text.length==1 && text[i]==' '){
			return ''
		}else{
			return text[i]
		}
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
