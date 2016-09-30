// You will use this Object for the answers
// DO NOT CHANGE THIS SECTION
var adventuringParty = {
    wizard: {
        name: "Gandalf",
        class: "Wizard",
        health: 43,
        mana: 248,
        weapons: [
            { name: "Staff", damage: 5 },
            { name: "Dagger", damage: 1 }
        ]
    },
    warrior: {
        name: "Conan",
        class: "Warrior",
        health: 206,
        mana: 0,
        weapons: [
            { name: "Axe", damage: 50 },
            {
                name: "Bow", arrow: [
                    { name: "+1 Arrows of Punishing", damage: 40, qty: 3 },
                    { name: "Wooden Arrows", damage: 10, qty: 4 }
                ]
            }
        ]
    }
}

// MAKE CHANGES AFTER THIS

// This function lists all characters in the party

function listCharacters() {
    console.log("Characters:");
    for (obj in adventuringParty) {
        console.log(" * " + adventuringParty[obj].name);
    }
}
//works above here. 
// This function should list all weapons for the character
var listWeapons = function (character) {
    console.log("Listing weapons for " + character.name + ":");
    for (var i in character.weapons) {
        var weapon = character.weapons[i];
        console.log("* " + weapon.name);
    }
}
//works above here. 
// This function should attack with the specified weapon
// It uses the weapon damage from the object to determine the maximum damage of this weapon
var maxDamageAxe = adventuringParty.warrior.weapons[0].damage;
var maxDamageStaff = adventuringParty.wizard.weapons[0].damage;
var maxDamage = '';
function weaponAttack(character, weaponName) {
    console.log(character + " attacks with his " + weaponName);

    for (i in character.weapons) {
        var weapon = character.weapons[i];
        if (weapon.name == weapon.name.toUpperCase()) {
            maxDamage = weapon.damage;
        }
    } if (character == adventuringParty.warrior.name) {
        console.log("He hits for " + Math.round(Math.random() * maxDamageAxe) + " damage");
    } else if (character == adventuringParty.wizard.name) {
        console.log("He hits for " + Math.round(Math.random() * maxDamageStaff) + " damage");
    }
}

// Run the functions
listCharacters(adventuringParty);
listWeapons(adventuringParty.wizard);
listWeapons(adventuringParty.warrior);
//
weaponAttack(adventuringParty.warrior.name, adventuringParty.warrior.weapons[0].name);
weaponAttack(adventuringParty.wizard.name, adventuringParty.wizard.weapons[0].name.toUpperCase());


/*
EXAMPLE OUTPUT:
Characters:                                                                                                                                                                                                  
 * Gandalf                                                                                                                                                                                                   
 * Conan                                                                                                                                                                                                     
Listing weapons for Gandalf:                                                                                                                                                                                 
 * Staff                                                                                                                                                                                                     
 * Dagger                                                                                                                                                                                                    
Listing weapons for Conan:                                                                                                                                                                                   
 * Axe                                                                                                                                                                                                       
 * Bow                                                                                                                                                                                                       
Conan attacks with his axe                                                                                                                                                                                   
He hits for 17 damage                                                                                                                                                                                        
Gandalf attacks with his STAFF                                                                                                                                                                               
He hits for 3 damage         
 */