
currency.addEventListener("change", function(){
	const BASE_URL="https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode="
	const date=currdate.value.split("-").join("");
	const currency_code=currency.value;
	let URI=`${BASE_URL}${currency_code}&date=${date}&json`;
	//console.log(URI);



	const XHR = new XMLHttpRequest();
	XHR.open('GET', URI);
	XHR.send();
	XHR.addEventListener("readystatechange", function(){
			//console.log (XHR.responseText); //дані відобразились в консолі в JSOn форматі
			var data=JSON.parse(XHR.responseText);
			console.log(data[0].rate);
			result.innerHTML=`<h1>${(data[0].rate).toFixed(2)}</h1>`
			

			//if ((XHR.readystate === 4) && (XHR.status === 200)) {
			//console.log (XHR.responseText);
			//var data=JSON.parse(XHR.responseText);
			//console.log(data);
			//result.innerHTML=`<h1>${(data[0].rate).toFixed(2)}</h1>`;*/
		//}
}, false);



}, false);