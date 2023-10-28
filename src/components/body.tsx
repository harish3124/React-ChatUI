import { Box, AbsoluteCenter } from "@chakra-ui/react";

import { chatType } from "../lib/types";
import { Message } from "./message";

interface props {
  chats: chatType[];
}
export const Body = (props: props) => {
  const time = props.chats[0].time.split(" ")[0].split("-");
  const month = Date(time[2], time[1], time[0]).toLocaleString();
  const date = `${time[2]} ${month.split(" ")[1]}, ${time[0]}`;

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
      <Box position="relative" mt="24">
        <Box h="2px" backgroundColor="#B7B7B7" />
        <AbsoluteCenter bg="#FAF9F4" textColor="#B7B7B7" p="2">
          {date}
        </AbsoluteCenter>
      </Box>
      {props.chats.map((chat, i) => (
        <Message chat={chat} key={i} />
      ))}
    </Box>
  );
};
