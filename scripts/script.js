function calculate() {
    if (!isFieldsEmpty()) {
        let fields = getFields();
        let adultNum = fields[0];
        let childrenNum = fields[1];
        let duration = fields[2];

        let beef;
        let beer;
        let soda;
        let water;

        let beefCounter = 0.4;
        let beerCounter = 1.2;
        let drinkCounter = 1;

        if (duration >= 6) {
            beefCounter = 0.65;
            beerCounter = 2;
            drinkCounter = 1.5;

        }
        
        beef = (adultNum * beefCounter) + (childrenNum * beefCounter / 2);
        beer = (adultNum * beerCounter);
        soda = (adultNum * drinkCounter) + (childrenNum * drinkCounter / 2);
        water = (adultNum * drinkCounter) + (childrenNum * drinkCounter / 2);

        let result = document.getElementById("result");
        result.innerHTML =
        "<div class='form-element result-element'>" +
            "<div class='icon-container'> <img class='icon' src='./assets/Icons/meat-icon.png' alt='meat' title='Meat'></div>" +
            "<div class='food-amount'>" + "Beef - " + beef.toFixed(2) + " Kg</div>" +
        "</div>" +

        "<div class='form-element result-element'>" +
        "<div class='icon-container'> <img class='icon' src='./assets/Icons/beer-icon.jpg' alt='Beer' title='Beer'></div>" +
            "<div class='food-amount'>" + "Beer - " + Math.ceil(beer / 0.6) + " Bottle(s)</div>" +
        "</div>" +

        "<div class='form-element result-element'>" +
            "<div class='icon-container'> <img class='icon' src='./assets/Icons/soda-icon.jpg' alt='soda' title='Soda'></div>" +
            "<div class='food-amount'>" + "Soda - " + Math.ceil(soda / .35) + " Can(s)</div>" +
        "</div>" +

        "<div class='form-element result-element'>" +
            "<div class='icon-container'> <img class='icon' src='./assets/Icons/water-icon.jpg' alt='water' title='Water'></div>" +
            "<div class='food-amount'>" + "Water - " + water.toFixed(2) + " L</div>" +
        "</div>" + 
        "<button class='form-element btn' id='reset' onclick='reset()'> RESET </button> <br>"
    }
}

function reset(){
    document.getElementById("adult").value = "";
    document.getElementById("children").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("result").innerHTML = "";
}

function isFieldsEmpty() { //Don't allows that the fields be empty
    let fields = getFields();
    let adultNum = fields[0];
    let childrenNum = fields[1];
    let duration = fields[2];

    // Array that storage the alert message that may be showed
    let msg = [];

    if (adultNum == "" || adultNum == null || adultNum == undefined) {
        msg.push("adult");
    }

    if (childrenNum == "" || childrenNum == null || childrenNum == undefined) {
        msg.push("children");
    }

    if (duration == "" || duration == null || duration == undefined) {
        msg.push("duration");
    }

    // If array isn't empty...
    if (msg.length >= 1) {
        // Shows an alert message and return false so that the program do not continue.
        switch (msg.length) {
            case 1: alert(msg + " must be filled!");
                break;

            case 2: alert(msg.join(" and ") + " must be filled!");
                break;

            case 3: alert(msg[0] + ", " + msg[1] + " and " + msg[2] + " must be filled!");
                break;

            default: alert("There was an error on switch!");
        }
        return true;
    }

    return false;
}

function getFields() { //Returns a list with the values of the fields in index.html
    let fields = [];
    fields.push(document.getElementById("adult").value);
    fields.push(document.getElementById("children").value);
    fields.push(document.getElementById("duration").value);
    return fields;
}
