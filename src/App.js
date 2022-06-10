import { useState } from "react";
import RecipeCard from "./components/RecipeCard";
import Search from "./components/Search";
import { SimpleGrid, Box } from "@chakra-ui/react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipeData, setRecipeData] = useState({});
  const appId = "0c56d2a4";
  const appKey = "b70994638724f6f43c5c6cc323beba29";
  const searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${appId}&app_key=${appKey}`;

  const searchRecipe = (event) => {
    if (event.key === "Enter") {
      fetch(searchUrl)
        .then((response) => response.json())
        .then((data) => setRecipeData(data));
      setSearchTerm("");
    }
  };

  return (
    <div>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchRecipe={searchRecipe}
      />
      <SimpleGrid p="5" columns={[1, 2, 3, 5]} spacing="5">
        {typeof recipeData.hits === "undefined" ? (
          <div></div>
        ) : (
          recipeData.hits.map((item, index) => {
            return (
              <Box>
                <RecipeCard
                  key={index}
                  label={item.recipe.label}
                  image={item.recipe.image}
                  healthLabels={item.recipe.healthLabels}
                  ingredientLines={item.recipe.ingredientLines}
                />
              </Box>
            );
          })
        )}
      </SimpleGrid>
    </div>
  );
}

export default App;
