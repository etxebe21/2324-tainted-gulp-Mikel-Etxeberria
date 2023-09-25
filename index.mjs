import { getData } from "./service.mjs";


const execute = async () => {

    try
    {
        const responseData = await getData();
        
        const data = responseData["ingredients"];
      
       

    }
    catch(error)
    {
          //ERROR
          console.log(error.message);
    }
}

execute();
