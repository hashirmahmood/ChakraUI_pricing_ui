import style from "../styles/middle.module.css";
import Image from "next/image";
import {
  Flex,
  Stack,
  Text,
  Heading,
  Button,
  VStack,
  HStack,
} from "@chakra-ui/react";

const Middle = () => {
  return (
    <Flex
      w={["352px", "352px", "994px"]}
      h={["600px", "600px", "270px"]}
      className={style.shadow}
      pos="relative"
      bottom="28"
      borderRadius="8"
      overflow="hidden"
      m="auto"
      flexDirection={["column", "column", "row"]}
    >
      {/* left box */}
      <VStack
        w={["352px", "352px", "338px"]}
        h={["285px", "285px", "270px"]}
        bg="purple.200"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="24px" fontWeight="700">
          Premium Pro
        </Text>
        <Heading fontSize="50px" fontWeight="700">
          $329
        </Heading>
        <Text fontSize="18px" fontWeight="500">
          Build just once
        </Text>
        <Button colorScheme="purple" w="270px">
          Get Started
        </Button>
      </VStack>

      {/* right box */}
      <Stack
        p={["7", "7", "10"]}
        fontSize="18px"
        fontWeight="400"
        flexDirection="column"
        spacing="6"
        bg="white"
      >
        <Text>
          Access these features when you get this pricing package for your
          business.
        </Text>
        {/* lines */}

        <HStack>
          <Image src="/icon1.png" alt="" width="22" height="22"></Image>
          <Text>Additional phone numbers</Text>
        </HStack>
        <HStack>
          <Image src="/icon1.png" alt="" width="22" height="22"></Image>
          <Text>Automated messages via Zapier</Text>
        </HStack>
        <HStack>
          <Image src="/icon1.png" alt="" width="22" height="22"></Image>
          <Text>24/7 support and consulting</Text>
        </HStack>
      </Stack>
    </Flex>
  );
};
export default Middle;
