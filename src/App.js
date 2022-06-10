import { useState } from "react";
import RecipeCard from "./components/RecipeCard";
import Search from "./components/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const appId = "0c56d2a4";
  const appKey = "b70994638724f6f43c5c6cc323beba29";
  const searchUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${appId}&app_key=${appKey}`;

  return (
    <div>
      <Search />
      <RecipeCard />
    </div>
  );
}

export default App;
