$(document).ready(function(){
	var fruits = [];

	$("#allthefruits").on("click", ".buy", function(){
		var fruitname = $(this).parent().find(".fruitname").text();
		var fruit = fruits(fruitname);

	})

	function findFruit(fruitname){
		for(var i = 0; i < fruits.length; i++) {
			if(fruits[i].fruitname == fruitname)
				return fruits[i];
		}
		return null;
	}

	function Inventoryitem(fruit){
		this.history = [];
		this.fruit = fruit;
		//this.quantity = 1;
	}

	function User(){
		this.inventory = [];
		this.cash = 100.00;
		this.hasFruit = function(fruit){		
			for(var i = 0; i < this.inventory.length; i++) {
				if(inventory[i].fruit.name === fruit.name)
					
			}
		}
		this.buyFruit = function(fruit){
			if(hasFruit(fruit)){
				//we have fruit
			} else{
				var item = new Inventoryitem(fruit);
				item.history.push(fruit.currentPrice);
				this.inventory.push(item);
				cash = cash - fruit.currentPrice;

			}
		}
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
	}, 15000);

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