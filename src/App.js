import { useState } from "react";
import RecipeCard from "./components/RecipeCard";
import Search from "./components/Search";
import { SimpleGrid, Box } from "@chakra-ui/react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const appId = "0c56d2a4";
  const appKey = "b70994638724f6f43c5c6cc323beba29";
  const searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${appId}&app_key=${appKey}`;

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SimpleGrid p="5" columns={[1, 2, 3]} spacing="5">
        <Box>
          <RecipeCard />
        </Box>
        <Box>
          <RecipeCard />
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default App;
