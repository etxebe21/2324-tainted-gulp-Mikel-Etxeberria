

export default class Character
{
    constructor(fullName, health, magick, stamina, potions)
    {
        this.fullName = fullName;
        this.health = health;
        this.magick = magick;
        this.stamina = stamina;
        this.potions = potions;
    }

    static from (playerData, potions)
    {
        return new Character(

            playerData.name + " the " + playerData.class,
            playerData.health,
            playerData.magick,
            playerData.stamina,
            potions
        )
    }
    drinkEmAll() {
        this.potions.forEach((potion) => {
            if (potion.name.startsWith('Potion')) {
                
                switch (potion.name) {
                    case 'Potion of Restore Health':
                        this.health += potion.value;
                        break;
                    case 'Potion of Restore Magicka':
                        this.magick += potion.value;
                        break;
                    case 'Potion of Restore Stamina':
                        this.stamina += potion.value;
                        break;
                    default:
                        
                        this.health++;
                        this.magick++;
                        this.stamina++;
                        break;
                }
            } else if (potion.name.startsWith('Poison')) {
                
                switch (potion.name) {
                    case 'Poison of Damage Health':
                        this.health -= potion.value;
                        break;
                    case 'Poison of Damage Magicka':
                        this.magick -= potion.value;
                        break;
                    case 'Poison of Damage Stamina':
                        this.stamina -= potion.value;
                        break;
                    default:
                        
                        this.health--;
                        this.magick--;
                        this.stamina--;
                        break;
                }
            }
            console.log(`${this.fullName} drank ${potion.name}`);
            this.showAttributes(); 
            
            
            if (this.health <= 0 || this.magick <= 0 || this.stamina <= 0) {
                console.log(`${this.fullName} ha perdido el juego.`);
                return; 
            }
        });
    }
        
    

    showAttributes(){

        console.log(`Health: ${this.health}`);
        console.log(`Magick: ${this.magick}`);
        console.log(`Stamina: ${this.stamina}`);
    }
    
    
}

