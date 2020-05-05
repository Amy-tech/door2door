//funtional shopping cart
	var total = (0);
	var myShoppingList = [];
	
	var veg = new Map();
		veg.set('Stock up', 1500);
		veg.set('A meal x4', 600);
		veg.set('A meal x6', 800);

	var parcel = new Map();
		parcel.set('Bolognese', 659);
		parcel.set('Mediterranean', 659);
		parcel.set('Full Stack', 400);
		parcel.set('Goulash', 659);

	var readyMeal = new Map();
		readyMeal.set('Sushi', 150);
		readyMeal.set('Sandwiches', 60);
		readyMeal.set('Salad', 45);
/* A function that will be called everytime the page is loaded */
/* this function is here to inisiate the session storage */
function mySession(){
  
	if (sessionStorage.getItem("cartTotal") === null){
		sessionStorage.setItem("cartStorage", JSON.stringify(myShoppingList));
		sessionStorage.setItem("cartTotal", 0);
	} else {
		myShoppingList = JSON.parse(sessionStorage.getItem("cartStorage"));
		total = JSON.parse(sessionStorage.getItem("cartTotal"));
	}
}

function add2cart(meal){
	/*get latest version of cart content from session storage*/
	myShoppingList = JSON.parse(sessionStorage.getItem("cartStorage"));
	total = JSON.parse(sessionStorage.getItem("cartTotal"));
	var price;

	if(veg.has(meal)){
		price = veg.get(meal);
	}else if(parcel.has(meal)){
		price = parcel.get(meal);
	}else if(readyMeal.has(meal)){
		price = readymeal.get(meal);
	}else{
		alert("could not find the item to put into cart");
	}

	var item = {name:meal,price:price};

	total += item.price;
	myShoppingList.push(item);
	alert("You have added: " + item.name + " to cart. \n" );
	sessionStorage.setItem("cartStorage", JSON.stringify(myShoppingList ));
	sessionStorage.setItem("cartTotal", JSON.stringify(total));
} 

function printOut(name,price){
	name + " R " + price + "\n";
}

function cart(){
	/* get latest version of cart content from session storage */
	myShoppingList = JSON.parse(sessionStorage.getItem("cartStorage"));
	total = JSON.parse(sessionStorage.getItem("cartTotal"));

	confirm("please confirm your order: \n" + myShoppingList.forEach(printOut())
		+ "Total: R " + total
	);


}

	


