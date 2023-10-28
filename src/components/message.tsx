import { Box } from "@chakra-ui/react";

import { chatType } from "../lib/types";

interface props {
  chat: chatType;
}
export const Message = (props: props) => {
  return (
    <Box
      display="flex"
      gap="2"
      className={props.chat.sender.self ? "justify-right" : ""}
    >
      {!props.chat.sender.self && (
        <Box as="img" borderRadius="full" src={props.chat.sender.image} h="8" />
      )}
      <Box
        maxW="80%"
        p="2"
        textAlign="left"
        className={props.chat.sender.self ? "message-self" : "message-other"}
      >
        {props.chat.message}
      </Box>
    </Box>
  );
};
