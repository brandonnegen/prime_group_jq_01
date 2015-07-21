$(document).ready(function(){
	var fruits = [];

	function inventoryItem(name){

	}

	function Fruit(name) {
		this.name = name;
		this.currentPrice = randomNumber(0.5, 9.99);
	}

	fruits.push(new Fruit("Apple"));

	// function fruitPrice(){
	// 	fruit = randomNumber(0.50, 9.99);
	// 	return fruit;
	// };

	// fruitPrice(apples);
	// fruitPrice(oranges);
	// fruitPrice(bananas);
	// fruitPrice(grapes);
	// fruitPrice(pears);
	console.log(Fruit);


	setInterval(function(){
		for(var i = 0; i < fruits.length; i++) {
			var currentPrice = fruits[i].currentPrice;
			fruits[i].currentPrice = randomChange(currentPrice);
		}
	}, 1000);

	function randomChange(price){
		number = randomNumber(0,1);
		if (number === 0){
			price += 0.50;
				if(price > 9.99){
					price -= 1;
				}
		} else {
			price -= 0.50;
				if(price < 0.50){
					price += 1;
				}
		}
		console.log(price);
		return price;
	}
})

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}