import "./App.css";

import { useEffect, useState } from "react";
import { responseType } from "./lib/types";
import { Box } from "@chakra-ui/react";

import { fetchData } from "./lib/fetchData";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Footer } from "./components/footer";

function App() {
  const empty: responseType = {};
  const [data, setData] = useState(empty);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(setData, setIsLoading);
  }, []);

  if (!isLoading) {
    return (
      <Box flex="1" display="flex" flexDir="column">
        <Header data={data} />
        <Body chats={data.chats} />
        <Footer />
      </Box>
    );
  }
}

export default App;
