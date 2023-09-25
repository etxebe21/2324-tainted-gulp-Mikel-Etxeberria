

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
                    // Para todas las demás pociones
                    this.health++;
                    this.magick++;
                    this.stamina++;
                    break;
            }
            console.log(`${this.fullName} drank ${potion.name}`);
            this.showAttributes();
        });

        // Luego de beber las pociones, puedes mostrar los atributos actualizados
        
    }

    showAttributes(){

        console.log(`Health: ${this.health}`);
        console.log(`Magick: ${this.magick}`);
        console.log(`Stamina: ${this.stamina}`);
    }
    
    
}

