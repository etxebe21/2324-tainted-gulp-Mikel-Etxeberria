

export default class PotionBag {
   
    constructor(potions) 
    {
        this.potions = potions || [];
    }

    createPotions(ingredients, cauldron) {

        const createdPotions = [];

        
        for (let i = 0; i < ingredients.length; i++) {
            for (let j = i + 1; j < ingredients.length; j++) {
                const ingredient1 = ingredients[i];
                const ingredient2 = ingredients[j];

                const potion = cauldron.createPotion(ingredient1, ingredient2);

                createdPotions.push(potion);
            }
        }

        this.potions.push(...createdPotions);

        return createdPotions;
    }
}

// export default class PotionBag {
//     constructor() {
//         this.potions = [];
//     }

//     createPotions(ingredients, cauldron) {
//         ingredients.forEach((ingredient1, index1) => {
//             ingredients.slice(index1 + 1).forEach((ingredient2) => {
//                 const potion = cauldron.createPotion(ingredient1, ingredient2);
//                 this.potions.push(potion);
//             });
//         });
//     }
// }

