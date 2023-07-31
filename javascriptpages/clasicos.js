

//simulador de cocteles
const cocktailsData = {
    margarita: {
      tequila: 45,
      triple_sec: 15,
      lime_juice: 30,
    },
    mojito: {
      white_rum: 60,
      mint_leaves: 8,
      simple_syrup: 30,
      lime_juice: 30,
      club_soda: 60,
    },
    piña_colada: {
      white_rum: 60,
      coconut_cream: 90,
      pineapple_juice: 120,
    },
    negroni: {
        gin: 30,
        vermouth: 30,
        campari: 30,
    },
    old_fashion: {
        whiskey: 60,
        angostura: 5,
        syrope: 8,
    },
  };
  
  function calculateIngredients() {
    const selectedCocktail = document.getElementById("cocktail").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);
    let result = "";
  
    if (isNaN(quantity) || quantity <= 0) {
      document.getElementById("result").innerText = "Por favor, ingresa una cantidad válida.";
      return;
    }
  
    if (!cocktailsData[selectedCocktail]) {
      document.getElementById("result").innerText = "Cóctel no válido.";
      return;
    }
  
    result += `Para ${quantity} cócteles de ${selectedCocktail} necesitas:\n`;
  
    for (const ingredient in cocktailsData[selectedCocktail]) {
      const amount = cocktailsData[selectedCocktail][ingredient] * quantity;
      result += `- ${amount} ml de ${prettifyIngredientName(ingredient)}\n`;
    }
  
    document.getElementById("result").innerText = result;
  }
  
  function prettifyIngredientName(name) {
    // Convertir snake_case a formato legible
    return name.replace(/_/g, " ").toUpperCase();
  }
  //fin simulador