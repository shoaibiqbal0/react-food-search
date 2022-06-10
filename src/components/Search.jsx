import { Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Flex justify="center" p="5">
      <Input
        maxW="800px"
        borderRadius="full"
        variant="filled"
        onChange={handleChange}
        value={searchTerm}
      />
    </Flex>
  );
};

export default Search;
