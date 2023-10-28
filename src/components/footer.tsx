import {
  Box,
  Center,
  Textarea,
  useDisclosure,
  SlideFade,
} from "@chakra-ui/react";
import ResizeTextarea from "react-textarea-autosize";
import { CiPaperplane, CiCamera, CiVideoOn, CiFileOn } from "react-icons/ci";
import { IoMdAttach } from "react-icons/io";
import { responseType, emptyChat } from "../lib/types";
import { useState } from "react";

interface props {
  data: responseType;
  dataSetter: (res: responseType) => void;
}
export const Footer = (props: props) => {
  const { isOpen, onToggle } = useDisclosure();
  const [message, setMessage] = useState("");

  let inputRef: any;
  const newMessage = (e: Event) => {
    e.preventDefault();
    if (message !== "") {
      emptyChat.message = message;
      emptyChat.sender.self = true;

      setMessage("");
      inputRef.value = "";

      props.dataSetter({
        ...props.data,
        chats: [...props.data.chats, emptyChat],
      });
    }
  };

  return (
    <>
      <SlideFade in={isOpen}>
        <Box
          display="flex"
          pos="absolute"
          bottom="24"
          right="5"
          gap="2"
          zIndex="2"
          bg="#008000"
          textColor="#FFF"
          p="3"
          borderRadius="full"
        >
          <CiCamera size="1.75rem" />
          <CiVideoOn size="1.75rem" />
          <CiFileOn size="1.75rem" />
        </Box>
      </SlideFade>
      <Center>
        <Box
          display="flex"
          pos="absolute"
          gap="3"
          bottom="8"
          borderRadius="xl"
          backgroundColor="#FFF"
          px="4"
          w="90vw"
          alignItems="center"
          id="footer"
          zIndex="2"
        >
          <Textarea
            id="input"
            minH="12"
            pt="3"
            fontSize="lg"
            textColor="#606060"
            variant="unstyled"
            overflow="hidden"
            w="100%"
            resize="none"
            minRows={1}
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value.trim());
            }}
            ref={(el) => (inputRef = el)}
            as={ResizeTextarea}
          />
          <Box as={IoMdAttach} size="1.75rem" onClick={onToggle} />
          <Box as={CiPaperplane} size="2rem" onClick={newMessage} />
        </Box>
      </Center>
    </>
  );
};
