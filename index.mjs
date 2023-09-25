import { getData } from "./service.mjs";


const execute = async () => {

    try
    {
        const responseData = await getData();
        
        const data = responseData["ingredients"];

        const ingredients = Ingredients.load(data);
      
       

    }
    catch(error)
    {
          //ERROR
          console.log(error.message);
    }
}

execute();
