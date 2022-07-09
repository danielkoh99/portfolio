import { Text, Box, ListItem, UnorderedList, Heading } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import AnimatedText from "./animations/AnimatedText";
import ScrollAnimText from "./animations/ScrollAnimText";
import { workText } from "../workText";

export default function WorkExperience() {
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
        <AnimatedText text="Work Experience" start={loading} delay={3} />
      </Box>
      {workText.map((text, index) => (
        <Box
          key={index}
          flexBasis={{ base: "100%", md: "40%", xl: "30%" }}
          display="flex"
          userSelect="none"
          margin={1}
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
              marginBottom="auto"
            >
              <Heading
                as="h4"
                size="md"
                align={{ base: "center", sm: "left" }}
                alignItems="baseline"
              >
                {text.header}
              </Heading>
              <Text
                paddingTop={5}
                paddingBottom={5}
                fontWeight="bold"
                align="left"
                alignItems="baseline"
              >
                Description:
              </Text>

              <Text align="left" wordBreak="break-word" alignItems="baseline">
                {text.description}
              </Text>
              <Box marginTop="auto">
                <Text
                  paddingTop={5}
                  fontWeight="bold"
                  align="left"
                  alignItems="baseline"
                >
                  What I learned:
                </Text>
                <Text
                  marginTop="auto"
                  alignSelf="flex-end"
                  paddingTop={5}
                  align="left"
                  wordBreak="break-word"
                  alignItems="baseline"
                >
                  {text.learned}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
