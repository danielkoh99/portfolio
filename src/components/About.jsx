import {
  Text,
  Box,
  ListItem,
  UnorderedList,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import AnimatedText from "./animations/AnimatedText";
import { aboutText } from "../aboutText";

export default function About() {
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <Box
      display="flex"
      marginBottom={10}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={{ base: "space-between", md: "center" }}
      ref={scrollRef}
    >
      <Box
        width="100%"
        display="flex"
        wordBreak="break-word"
        flexWrap="wrap"
        paddingBottom={10}
        justify="center"
        flexDirection="column"
        align="center"
        fontSize={{ base: 30, md: 40 }}
        fontWeight={600}
      >
        <AnimatedText text="About me" start={loading} delay={3} />
      </Box>
      {aboutText.map((text, index) => (
        <Box
          key={index}
          flexBasis={{ base: "100%", md: "40%", xl: "30%" }}
          display="flex"
          userSelect="none"
          margin={2}
          flexDir="column"
          wordBreak="break-word"
          border="2px"
          borderRadius={10}
          backgroundColor="white"
          color="#334766"
        >
          <Box
            display="flex"
            wordBreak="break-word"
            flexWrap="wrap"
            paddingBottom={20}
            flexDirection="column"
            fontWeight={600}
            padding={2}
          >
            <Box
              height="100%"
              padding={2}
              wordBreak="break-word"
              display="flex"
              flexWrap="wrap"
              width="100%"
              flexDirection="column"
              fontWeight={500}
              marginBottom={4}
            >
              <Heading as="h4" size="md" marginBottom={2}>
                {text.header}
              </Heading>
              <UnorderedList>
                {text.listItems.length > 12 ? (
                  <SimpleGrid columns={2}>
                    {text.listItems.map((listItem, index) => (
                      <ListItem
                        key={index}
                        marginRight={2}
                        wordBreak="break-word"
                      >
                        {listItem}
                      </ListItem>
                    ))}
                  </SimpleGrid>
                ) : (
                  text.listItems.map((listItem, index) => (
                    <ListItem key={index} wordBreak="break-word">
                      {listItem}
                    </ListItem>
                  ))
                )}
              </UnorderedList>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
