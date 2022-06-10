import "../index.css";
import {
  Container,
  Image,
  VStack,
  Text,
  Badge,
  HStack,
} from "@chakra-ui/react";

const RecipeCard = ({ label, image, healthLabels, ingredientLines }) => {
  const colors = ["green", "purple", "yellow", "blue", "red"];

  return (
    <Container
      p="2"
      border="1px"
      borderColor="gray.600"
      borderRadius="5"
      maxW="300px"
    >
      <VStack>
        <Image src={image} />
        <Text
          fontFamily="Dancing Script"
          fontSize="3xl"
          textAlign="center"
          p="2"
          w="100%"
          bgGradient="linear(to-r, blue.200, purple.200)"
          bgClip="text"
          fontWeight="bold"
        >
          {label}
        </Text>
        <VStack borderRadius="5" p="2" bgColor="gray.700" w="100%">
          {ingredientLines?.map((item, index) => {
            return (
              <Text key={index} w="100%">
                {item}
              </Text>
            );
          })}
        </VStack>
        <HStack wrap="wrap" pt="2" justify="center">
          {healthLabels?.map((healthLabel, index) => {
            return (
              index < 5 && (
                <Badge
                  key={index}
                  m="1"
                  colorScheme={
                    colors[Math.floor(Math.random() * colors.length)]
                  }
                  fontSize="xx-small"
                >
                  {healthLabel}
                </Badge>
              )
            );
          })}
        </HStack>
      </VStack>
    </Container>
  );
};

export default RecipeCard;
