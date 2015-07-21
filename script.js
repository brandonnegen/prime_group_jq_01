$(document).ready(function(){
	var apples = 0;
	var oranges = 0;
	var bananas = 0;
	var grapes = 0;
	var pears = 0;

	function fruitPrice(){
		fruit = randomNumber(0.50, 9.99);
		return fruit;
	};

	// fruitPrice(apples);
	// fruitPrice(oranges);
	// fruitPrice(bananas);
	// fruitPrice(grapes);
	// fruitPrice(pears);
	console.log(apples);


	setInterval(function(){
		apples = randomChange(apples);}, 1000);

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