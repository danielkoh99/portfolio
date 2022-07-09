import React, { useState, useEffect } from "react";
import { Flex, Text, Tag, HStack } from "@chakra-ui/react";
import fetchData from "../fetchData";

export default function LanguagesUsed({ url, token }) {
  const [languages, setLanguages] = useState({});

  useEffect(() => {
    const getLangs = async () => {
      const lang = await fetchData(url, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setLanguages(lang.data);
    };
    getLangs();
  }, []);

  return (
    <>
      <Text
        paddingTop={5}
        paddingBottom={5}
        fontWeight="bold"
        align="left"
        alignItems="baseline"
      >
        Languages used:
      </Text>

      <HStack display="flex" flexWrap="wrap" spacing={{ base: 2, sm: 1 }}>
        {Object.entries(languages)
          .slice(0, 3)
          .map(([key, val]) => (
            <Tag
              borderRadius="full"
              size={{ base: "sm", md: "md" }}
              margin={0}
              variant="solid"
              backgroundColor="#A1BCCF"
              color="#334766"
              key={key}
            >
              {key}
            </Tag>
          ))}
      </HStack>
    </>
  );
}
