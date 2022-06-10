import {
  Container,
  Image,
  VStack,
  Text,
  Badge,
  HStack,
} from "@chakra-ui/react";
import pic from "../components/pic.jpg";

const RecipeCard = () => {
  return (
    <Container
      p="2"
      border="1px"
      borderColor="gray.600"
      borderRadius="5"
      maxW="300px"
    >
      <VStack>
        <Image src={pic} />
        <Text textAlign="center" pt="2" w="100%">
          Pasta alla Gricia Recipe
        </Text>
        <VStack borderRadius="5" p="2" bgColor="green">
          <Text w="100%">1 1/2 to 2 ounces of guanciale</Text>
          <Text w="100%">2 tablespoons of grated Pecorino Romano</Text>
          <Text w="100%">4 ounces of dried pasta</Text>
        </VStack>
        <HStack wrap="wrap" pt="2">
          <Badge m="1" colorScheme="green" fontSize="xx-small">
            Sugar-Conscious
          </Badge>
          <Badge colorScheme="blue" fontSize="xx-small">
            Low Potassium
          </Badge>
          <Badge colorScheme="purple" fontSize="xx-small">
            Kidney-Friendly
          </Badge>
          <Badge colorScheme="yellow" fontSize="xx-small">
            Egg-Free
          </Badge>
        </HStack>
      </VStack>
    </Container>
  );
};

export default RecipeCard;
