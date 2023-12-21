function insert_Row() {
    //Write your code here
	let tableElement=document.getElementById("sampleTable");
		let trElement=document.createElement("tr");

	let tdElement=document.createElement("td");
	tdElement.innerText="Row1 cell1";
	tdElement.appendChild(trElement);
	trElement.appendChild(tableElement);
	

	
  
  
}
