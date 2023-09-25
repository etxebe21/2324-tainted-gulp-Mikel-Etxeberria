

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

    static from (dataBag, potions)
    {
        return new Character(

            dataBag.name + " the " + playerData.class,
            dataBag.health,
            dataBag.magick,
            dataBag.stamina,
            potions
        )
    }
}