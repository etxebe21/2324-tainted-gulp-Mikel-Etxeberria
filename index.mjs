import { getData, getBags } from "./service.mjs";
import Cauldron from "./cauldron.mjs";
import PotionBag from "./PotionBag.mjs";
import Ingredients from "./ingredients.mjs";


const execute = async () => {

    try
    {
        const ingredientsData = await getData();
        
        const data = ingredientsData["ingredients"];

        const dataBag = await getBags();

        const potionbag = dataBag.players[0].pouch_red;

        //Creamos los ingredientes
        const ingredients = Ingredients.load(data);

        const cauldron = new Cauldron(ingredients);
        // console.log(`Calderos: `, cauldron);
	
        const potionBag = new PotionBag(ingredients);
        const potionsBag = potionBag.createPotions(potionbag, cauldron);
        // showIngredients(dataBag);
    
        console.log(potionsBag);

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

const showIngredients = (dataBag) => {

    dataBag.forEach(element => {
        const bag = element.pouch_red;
        console.log(` Bolsa: ${bag}`);
        
    });

}

