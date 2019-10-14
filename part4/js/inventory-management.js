/*eslint-env browser*/

function display_menu() {
    "use strict";
    console.log("Welcome to Product Inventory Management System ");
    console.log("");
    console.log("COMMAND MENU");
    console.log("view - View all products");
    console.log("update - Quantity");
    console.log("exit - Exit the program");
    console.log("");
}

function toString(product){
    "use strict";
    return product[0] + "" +product[1] + "("+product[2]+") $"+product[3];
}


// For viewing the inventory list
function viewInventory(inventory) {
    "use strict";
    inventory.forEach(function (product){
        console.log(toString(product), "<br>");
    });
    console.log("");
}


// For updating an existing product’s inventory (quantity)
function updatedInventory(inventory){
    "use strict";
    var sku = window.prompt("Enter Sku :");
    var quantity = window.prompt("Enter quantity to update:");
    var i;
    while (true){
        for(i = 0; i <inventory.length; i++){
            var product = inventory[i];
            if (sku == product[0]){
                product[2] = parseInt(quantity);
                return true;
            }
        }
    }
}


// Executing the commands
function main(){
    "use strict";
    var inventory,command;

    display_menu();

    var product1 = [4284, "Shirt", 10, 15.99];
    var product2 = [6343, "Jeans", 22, 39.99];
    var product3 = [3223, "Socks", 36, 9.99];
    var product4 = [2233, "Hat", 12, 14.99];
    var product5 = [9382, "Jacket", 5, 49.99];

    inventory = [product1 , product2 , product3 , product4 , product5];

    while(true) {
        command = window.prompt("Enter command"); 
        if (command !== null){
            if (command === "view"){
                viewInventory(inventory);
            } else if (command === "update"){
                updatedInventory(inventory);
            } else if (command === "exit"){
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    console.log("Program terminated.");
}
main();
