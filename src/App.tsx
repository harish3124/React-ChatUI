import { useEffect, useState } from "react";
import { emptyResp } from "./lib/types";
import { Box } from "@chakra-ui/react";

import { fetchData } from "./lib/fetchData";
import { Header } from "./components/header";
import { Body } from "./components/body";
import { Footer } from "./components/footer";

function App() {
  const [data, setData] = useState(emptyResp);
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetchData(setData, setIsLoading, pageCount, data);
    console.log(pageCount)
  }, [pageCount]);

  if (!isLoading) {
    return (
      <Box flex="1" display="flex" flexDir="column">
        <Header data={data} />
        <Body data={data} page={pageCount} pageSetter={setPageCount} />
        <Footer data={data} dataSetter={setData} />
      </Box>
    );
  }
}

export default App;
