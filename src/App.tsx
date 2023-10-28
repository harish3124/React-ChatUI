import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./lib/fetchData";
import { responseType } from "./lib/types";

import { Box, Heading, Text } from "@chakra-ui/react";

function App() {
  const empty: responseType = {};
  const [data, setData] = useState(empty);
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <Box flex="1" display="flex" flexDir="column">
      <Box display="flex" flexDir="column" gap="5" textAlign="left" pb="4">
        <Box>
          <Heading size="xl">{data.name}</Heading>
        </Box>
        <Box display="flex" gap="3">
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
                {data.from}
              </Text>
            </Box>
            <Box>
              <Text as="span" mr="2" fontSize="lg" className="text-grey">
                To
              </Text>
              <Text as="span" fontSize="xl" fontWeight="bold">
                {data.to}
              </Text>
            </Box>
          </Box>
          <Box>{/* DropDown */}</Box>
        </Box>
      </Box>
      <Box flex="9">Chat Body Section</Box>
      <Box flex="1">Chat Input Section</Box>
    </Box>
  );
}

export default App;
