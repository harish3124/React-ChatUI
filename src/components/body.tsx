import { Box, AbsoluteCenter } from "@chakra-ui/react";

import { responseType } from "../lib/types";
import { Message } from "./message";
import { useEffect, useState } from "react";

interface props {
  data: responseType;
  page: number;
  pageSetter: (i: number) => void;
}
export const Body = (props: props) => {
  const [prevTop, setPrevTop] = useState(props.data.chats[0]);

  const scrollContainer = document.getElementById("scrollable-body");

  if (scrollContainer !== null) {
    const handleScroll = () => {
      if (scrollContainer.scrollTop === 0) {
        console.log("removed");
        props.pageSetter(props.page + 1);
        scrollContainer.scrollTo({ top: 180, behavior: "smooth" });
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
  }

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
    if (props.data.chats[0] === prevTop) {
      ref.scrollIntoView({ behavior: "smooth" });
    } else {
      setPrevTop(props.data.chats[0]);
    }
  }, [props.data]);

  return (
    <Box
      flex="9"
      px="4"
      pb="28"
      display="flex"
      pt="100"
      gap="6"
      flexDir="column"
      overflow="auto"
      id="scrollable-body"
    >
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
