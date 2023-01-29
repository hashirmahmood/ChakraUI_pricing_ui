import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
const End = () => {
  return (
    <Flex
      justifyContent="center"
      pos="relative"
      bottom="12"
      flexDirection={["column", "column", "row"]}
      alignItems="center"
    >
      {/* box1 */}
      <Flex py="6">
        <Image src="/icon2.png" width="40" height="40" alt=""></Image>
        <Text fontSize="16px" fontWeight="700" w="220px" px="4">
          30 days money back Gaurentee
        </Text>
      </Flex>
      <Flex py="6">
        <Image src="/icon3.png" width="40" height="40" alt=""></Image>
        <Text fontSize="16px" fontWeight="700" w="220px" px="4">
          No settle fees 100% hussle free
        </Text>
      </Flex>
      <Flex py="6">
        <Image src="/icon4.png" width="40" height="40" alt=""></Image>
        <Text fontSize="16px" fontWeight="700" w="220px" px="4">
          No monthly subscription Pay once and for all
        </Text>
      </Flex>
    </Flex>
  );
};
export default End;
