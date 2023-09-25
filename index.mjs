import { getData, getBags } from "./service.mjs";
import Ingredients from "./ingredients.mjs";
import Cauldron from "./cauldron.mjs";

const execute = async () => {

    try
    {
        const ingredientsData = await getData();
        
        const data = ingredientsData["ingredients"];

        const bagData = await getBags();

        const dataBag = bagData["players"];

        const ingredients = dataBag.pouch_red;

        showIngredients(dataBag);
      
        const cauldron = new Cauldron(ingredients);

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
        const effects = element.pouch_red;
        console.log(` Bolsa: ${effects}`);
        
    });

}

