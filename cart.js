	var totalexcl = (0);
	var myShoppingList = [];
	var lastAmnt =0;
	const cartList = document.getElementById("cartList");
    
function cartInfo(){
	/* onload and getting information from sessionStorage */
    console.log(sessionStorage.getItem("cartStorage")) 
	myShoppingList = JSON.parse(sessionStorage.getItem("cartStorage"));
	console.log(myShoppingList)
	totalexcl = JSON.parse(sessionStorage.getItem("cartTotal"));	

	if (sessionStorage.getItem("lastAmnt") === null){
		sessionStorage.setItem("lastAmnt", 0);
	} else {
		lastAmnt = sessionStorage.getItem("lastAmnt");
	}

	/* subtotal, vat and total */
	updateTotal(totalexcl);
	
	/* adding the shopping list information */
	 console.log(myShoppingList)
	 myShoppingList.forEach(function(elem){
		console.log(elem)
	 	updatelist(elem.name,elem.price)
	 });
}

/* Dropdown Jquery */
$(document).ready (function(){

	$("#drop ul li").hover(function(){
		$(this).find("ul") .slideToggle(400);
	})

	/* Show and hide Jquery */	
	$("#show").click(function(){
		$("#hide").toggle();
	});

	/* chaining effects Jquery*/
	$("#chain").hover(function(){
		$("#chain").fadeOut( 2000);
		$("#chain").fadeIn( 2000);
	});
});

/* printout list */
function updatelist(name,price){
	let newlist = document.createElement('li');
	let println = name + "   R " + price;
	newlist.textContent = println;
	console.log(newlist);
	cartList.appendChild(newlist);
}

/* adding additional courier services */
function setCourier(type){
	if (lastAmnt > 0){
	let deliver = myShoppingList.pop()
	console.log(deliver)
	}
	let newAmnt = 0;
	if(type == 'Standard'){
		newAmnt = 60;
	}else if(type == 'OverNight'){
		newAmnt = 100;
	}else if(type == 'Express'){
		newAmnt = 140;
	}else{
		newAmnt = 0;
	};

	totalexcl = totalexcl + newAmnt - lastAmnt;
	lastAmnt = newAmnt;
	updateTotal(totalexcl);

	sessionStorage.setItem("cartTotal",totalexcl);
	sessionStorage.setItem("lastAmnt", lastAmnt);
	myShoppingList.push({name:type,price:newAmnt});
	sessionStorage.setItem("cartStorage", JSON.stringify(myShoppingList ));
}

/* adding vat */
function updateTotal(sub){
	var vat = sub * 0.15;
	var total = sub + vat;
    document.getElementById("subtotal").innerHTML = sub;
	document.getElementById("vatTotal").innerHTML = vat;
	document.getElementById("total").innerHTML = total;
}

/* referance number and alert */
/* good to know: it dosnt work if the function and id are the same name */
function proceedBtn(){
	var ref = Math.round(Math.random() * 1000000);
	console.log("random number: " + ref);
	alert( "Your order was successful, your referance number: " +ref);
}


