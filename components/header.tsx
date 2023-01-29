import { Box, VStack, Heading, Text } from "@chakra-ui/react";
const Header = () => {
  return (
    <VStack bg="#6B46C1" flexDirection="column" h="370px" pt="70px" px="15px">
      <Box></Box>
      <Heading
        fontSize={["30px", "30px", "48px"]}
        color="white"
        textAlign={["left", "left", "center"]}
      >
        Simple pricing for your business
      </Heading>
      <Text
        color="white"
        fontSize={["18px", "18px", "24px"]}
        textAlign={["left", "left", "center"]}
      >
        Plans that are carefully crafted to suit your business
      </Text>
    </VStack>
  );
};
export default Header;
