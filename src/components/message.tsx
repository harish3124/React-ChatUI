import { Box } from "@chakra-ui/react";

import { chatType } from "../lib/types";

interface props {
  chat: chatType;
  id: string;
}
export const Message = (props: props) => {
  return (
    <Box
      display="flex"
      gap="2"
      className={props.chat.sender.self ? "justify-right" : ""}
      id={props.id}
    >
      {!props.chat.sender.self && (
        <Box>
          <Box
            as="img"
            borderRadius="full"
            src={props.chat.sender.image}
            h="8"
          />
          {props.chat.sender.is_kyc_verified && (
            <Box
              as="img"
              src="check-verified-02.svg"
              zIndex="1"
              h="4"
              pos="relative"
              top="-3"
              right="-5"
            />
          )}
        </Box>
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
