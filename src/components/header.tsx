import { Box, Heading, Text } from "@chakra-ui/react";
import { responseType } from "../lib/types";
import { IoArrowBack, IoCreate } from "react-icons/io5";
import { FaEllipsisV } from "react-icons/fa";

interface props {
  data: responseType;
}
export const Header = (props: props) => {
  const nameList = props.data.name.split(" ");
  const name = nameList[0] + " " + nameList[2];

  return (
    <Box
      display="flex"
      flexDir="column"
      gap="5"
      textAlign="left"
      px="4"
      pb="4"
      mb="4"
      borderBottomWidth="2px"
      borderColor="#60606020"
    >
      <Box display="flex" alignItems="center" gap="4">
        <Box as={IoArrowBack} size="1.75rem" />
        <Heading flex="1" size="xl" mt="2px">
          {name}
        </Heading>
        <Box as={IoCreate} size="1.75rem" />
      </Box>
      <Box display="flex" gap="3" alignItems="center">
        <Box
          as="img"
          src="https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0"
          borderRadius="full"
          h="14"
        />
        <Box flex="1">
          <Box>
            <Text as="span" mr="2" fontSize="lg" className="text-grey">
              From
            </Text>
            <Text as="span" fontSize="xl" fontWeight="bold">
              {props.data.from}
            </Text>
          </Box>
          <Box>
            <Text as="span" mr="2" fontSize="lg" className="text-grey">
              To
            </Text>
            <Text as="span" fontSize="xl" fontWeight="bold">
              {props.data.to}
            </Text>
          </Box>
        </Box>
        <Box as={FaEllipsisV} size="1.25rem" />
      </Box>
    </Box>
  );
};
