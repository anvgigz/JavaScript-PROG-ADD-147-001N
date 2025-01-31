function calculateOrder() {
    const drinks = [
        { id: "drink1", name: "Coke", price: 1.5 },
        { id: "drink2", name: "Pepsi", price: 1.5 },
        { id: "drink3", name: "Sprite", price: 1.5 },
        { id: "drink4", name: "Fanta", price: 1.5 },
        { id: "drink5", name: "Water", price: 1.0 }
    ];
    const sandwiches = [
        { id: "sandwich1", name: "Hamburger", price: 3.0 },
        { id: "sandwich2", name: "Cheeseburger", price: 3.5 },
        { id: "sandwich3", name: "Chicken Sandwich", price: 4.0 },
        { id: "sandwich4", name: "BLT", price: 3.5 },
        { id: "sandwich5", name: "Veggie Sandwich", price: 3.0 }
    ];
    const desserts = [
        { id: "dessert1", name: "Fries", price: 2.0 },
        { id: "dessert2", name: "Onion Rings", price: 2.5 },
        { id: "dessert3", name: "Salad", price: 3.0 },
        { id: "dessert4", name: "Cookie", price: 1.0 },
        { id: "dessert5", name: "Ice Cream", price: 2.0 }
    ];
    
    let orderSummary = "";
    let totalCost = 0;
    
    orderSummary += `<h3>Drinks</h3>`;
    drinks.forEach(drink => {
        let quantity = document.getElementById(drink.id).value;
        if (quantity > 0) {
            orderSummary += `${drink.name}: ${quantity} x $${drink.price.toFixed(2)} = $${(quantity * drink.price).toFixed(2)}<br>`;
            totalCost += quantity * drink.price;
        }
    });

    orderSummary += `<h3>Sandwiches</h3>`;
    sandwiches.forEach(sandwich => {
        let quantity = document.getElementById(sandwich.id).value;
        if (quantity > 0) {
            orderSummary += `${sandwich.name}: ${quantity} x $${sandwich.price.toFixed(2)} = $${(quantity * sandwich.price).toFixed(2)}<br>`;
            totalCost += quantity * sandwich.price;
        }
    });

    orderSummary += `<h3>Desserts/Sides</h3>`;
    desserts.forEach(dessert => {
        let quantity = document.getElementById(dessert.id).value;
        if (quantity > 0) {
            orderSummary += `${dessert.name}: ${quantity} x $${dessert.price.toFixed(2)} = $${(quantity * dessert.price).toFixed(2)}<br>`;
            totalCost += quantity * dessert.price;
        }
    });

    orderSummary += `<h3>Total Cost: $${totalCost.toFixed(2)}</h3>`;
    
    document.getElementById("orderSummary").innerHTML = orderSummary;
}
