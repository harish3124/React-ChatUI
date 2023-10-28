import { Box, AbsoluteCenter, Center } from "@chakra-ui/react";

import { responseType } from "../lib/types";
import { Message } from "./message";
import { useEffect } from "react";

interface props {
  data: responseType;
  pageSetter: () => void;
}
export const Body = (props: props) => {
  const time = props.data.chats[0].time.split(" ")[0].split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = `${time[2]} ${months[parseInt(time[1]) - 1]}, ${time[0]}`;

  let ref: any;

  useEffect(() => {
    ref.scrollIntoView({ behavior: "smooth" });
  }, [props.data]);

  return (
    <Box
      flex="9"
      px="4"
      pb="28"
      display="flex"
      gap="6"
      flexDir="column"
      overflow="auto"
    >
      <Center as="button" onClick={props.pageSetter}>
        Load More
      </Center>
      <Box position="relative" mt="24">
        <Box h="2px" backgroundColor="#B7B7B7" />
        <AbsoluteCenter bg="#FAF9F4" textColor="#B7B7B7" p="2">
          {date}
        </AbsoluteCenter>
      </Box>
      {props.data.chats.map((chat, i) => (
        <Message chat={chat} key={i} />
      ))}
      <div ref={(el) => (ref = el)} />
    </Box>
  );
};
