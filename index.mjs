import { getData, getBags } from "./service.mjs";
import Cauldron from "./cauldron.mjs";
import PotionBag from "./PotionBag.mjs";
import Ingredients from "./ingredients.mjs";
import Character from "./character.mjs";


const execute = async () => {

    try
    {
        const ingredientsData = await getData();
        
        const data = ingredientsData["ingredients"];

        const dataBag = await getBags();

        const playerData = dataBag.players[0];

        const potionbag = dataBag.players[0].pouch_red;

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        const cauldron = new Cauldron(ingredients);
        // console.log(`Calderos: `, cauldron);
        
        const potionBag = new PotionBag(ingredients);
        const potionsBag = potionBag.createPotions(potionbag, cauldron);
        //showPotions(potionsBag);
        //console.log(potionsBag);

        const Joseph =  Character.from(playerData, potionsBag);
        showCharacter(Joseph);
        //console.log(Joseph);

        // const potion1 = cauldron.createPotion("Bear Claws", "Bee");
        

        // const potion2 = cauldron.createPotion("Chicken's Egg", "Chaurus Eggs");
      
        // const potion3 = cauldron.createPotion("Chaurus Eggs", "Bleeding Crown");
      

        // const potion4 = cauldron.createPotion("Nightshade", "Ectoplasm");
        

        // const potions = [];

        // potions.push(potion1);
        // potions.push(potion2);
        // potions.push(potion3);
        // potions.push(potion4);

        // console.log(potions);

    }
    catch(error)
    {
          //ERROR
          console.log(error.message);
    }
}

execute();


const showIngredients = (data) => {

    dataBag.forEach(element => {
        const bag = element.pouch_red;
        console.log(` Bolsa: ${bag}`);
        
    });

}

const showPotions = (potionsBag) => {

    potionsBag.forEach(element => {
        const name = element.name;
        const value = element.value;
        const weight = element.weight;
        const time = element.time;
        console.log(` Name: ${name} -> Value:  ${value} -> Weight: ${weight} -> Time:   ${time}`);
        
    });

}

const showCharacter = (Joseph) => {

        console.log(`-----------------------------`);
        console.log(` Name: ${Joseph.fullName}`);
        console.log(`-----------------------------`);
        console.log(` Health: ${Joseph.health}`);
        console.log(` Magick: ${Joseph.magick}`);
        console.log(` Stamina: ${Joseph.stamina}`);

        Joseph.potions.forEach((potion, index) => {
            console.log(` Potion  ${index + 1}. ${potion.name}`);
}
        )

}

