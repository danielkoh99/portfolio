/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable quotes */
import React, { Suspense, useEffect, useState } from "react";
import {
  Flex,
  Box,
  Text,
  Link,
  Container,
  Heading,
  Tag,
  Icon,
  Tooltip,
  Collapse,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const LanguagesUsed = React.lazy(() => import("./LanguagesUsed"));

export default function Projects(props) {
  const { repo, token, variants } = props;

  const [isFullText, setFullText] = useState(false);

  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    } else {
      return string;
    }
  }
  return (
    <motion.div variants={variants}>
      <Box
        _hover={{
          transform: "scale(1.02)",
          boxShadow: "xl",
          transitionDuration: "400ms",
          transitionTimingFunction: "ease-in-out",
        }}
        userSelect="none"
        p={4}
        boxShadow="md"
        rounded="md"
        borderRadius={10}
        display="flex"
        alignItems="left"
        flexDirection="column"
        bg="#334766"
        margin={2}
        color="white"
      >
        <Heading
          as="h4"
          size="md"
          align={{ base: "center", sm: "left" }}
          alignItems="baseline"
          marginBottom={3}
        >
          {repo.name}
        </Heading>
        <Text
          paddingBottom={5}
          fontWeight="bold"
          align="left"
          alignItems="baseline"
        >
          Description:
        </Text>
        <Box align="left" wordBreak="break-word" alignItems="baseline">
          <Collapse startingHeight={50} in={isFullText}>
            {isFullText
              ? repo.description === null
                ? "This repo has no description"
                : repo.description
              : truncateString(
                  repo.description === null
                    ? "This repo has no description"
                    : repo.description,
                  100
                )}
            {repo.description !== null && repo.description.length > 100 ? (
              <Link onClick={() => setFullText(!isFullText)} fontWeight={600}>
                {isFullText ? "Hide text" : "Click to read more"}
              </Link>
            ) : null}
          </Collapse>
        </Box>
        <Suspense fallback={<div>Loading...</div>}>
          <LanguagesUsed url={repo.languages_url} token={token} />
        </Suspense>
        <Link
          marginTop="auto"
          paddingTop={5}
          align="left"
          alignItems="center"
          justifyContent="start"
          display="flex"
          href={repo.svn_url}
          isExternal
        >
          <Tooltip label="Open in Github">
            <Icon viewBox="0 0 24 24" w={8} h={8}>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </Icon>
          </Tooltip>
        </Link>
      </Box>
    </motion.div>
  );
}
