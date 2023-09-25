import { getData, getBags } from "./service.mjs";
import Cauldron from "./cauldron.mjs";
import PotionBag from "./PotionBag.mjs";


const execute = async () => {

    try
    {
        const ingredientsData = await getData();
        
        const data = ingredientsData["ingredients"];

        const bagData = await getBags();

        const dataBag = bagData["players"];

        const ingredientNames = dataBag.pouch_red;
        const ingredients = ingredientNames.map(name => cauldron.findIngredientByName(name));

        // showIngredients(dataBag);
      
        const cauldron = new Cauldron(data);
        console.log(`Calderos: `, cauldron);

        const potionBag = new PotionBag(); // Crear un objeto PotionBag

        potionBag.createPotions(ingredients, cauldron); // Llenar el PotionBag con las pociones

        const potions = potionBag.potions // Obtener la lista de pociones

        console.log("Lista de pociones:");
        console.log(potions);

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

