import React, { useEffect, useState } from "react";
import {
  Flex,
  Image,
  Container,
  Box,
  Link,
  Icon,
  Text,
  SkeletonCircle,
  Button,
} from "@chakra-ui/react";
import Background from "./Background";
import MyImage from "../assets/me.png";
import About from "./About";
import Projects from "./Projects";
import { motion, AnimatePresence } from "framer-motion";
import { bgOptions } from "../bgOptions";
import { ChevronDownIcon } from "@chakra-ui/icons";
import AnimatedText from "./animations/AnimatedText";
import { BounceAnim } from "./animations/BounceAnim";
import WorkExperience from "./WorkExperience";

export default function Landing({ data, token }) {
  const [loading, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      <Container maxW={false}>
        <Flex
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          align="center"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            width={{ base: "100%", sm: "50%" }}
            marginBottom={20}
            fontSize={{ base: 30, md: 40 }}
            fontWeight={600}
          >
            <AnimatedText text="Hi I'm Daniel" start={loading} />
            {loading ? (
              <>
                <Image
                  boxSize="sm"
                  flex={1}
                  src={MyImage}
                  alt="Daniel Kohari"
                />

                <Button size="lg">
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    href="mailto: kohari.daniel@gmail.com"
                  >
                    Contact me
                  </Link>
                </Button>
              </>
            ) : (
              <SkeletonCircle size={{ base: 60, md: 80 }} />
            )}
          </Flex>
          <About />
        </Flex>
        <Flex
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
          align="center"
        >
          <WorkExperience />
        </Flex>
        <Box
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
          <AnimatedText
            text="Scroll to check out my Projects below"
            start={loading}
            delay={4}
          />
          <Box rounded="full" border="5">
            <BounceAnim>
              <ChevronDownIcon h={20} w={20} />
            </BounceAnim>
          </Box>
        </Box>
        <Flex
          id="projects"
          direction="row"
          flexWrap="wrap"
          align="center"
          justifyContent="center"
        >
          {data.map((repo, index) => {
            if (!repo.fork) {
              const variants = {
                initial: { y: 300 },
                exit: { y: 300 },
                whileInView: {
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.6,
                  },
                },
              };
              return (
                <AnimatePresence key={index} exitBeforeEnter={true}>
                  <Box
                    marginBottom="auto"
                    minHeight="100%"
                    width={{
                      base: "100%",
                      md: "40%",
                    }}
                  >
                    <motion.div
                      initial="initial"
                      exit="exit"
                      whileInView="whileInView"
                      viewport={{ once: true, amount: 0.8 }}
                    >
                      <Projects variants={variants} repo={repo} token={token} />
                    </motion.div>
                  </Box>
                </AnimatePresence>
              );
            }
          })}
        </Flex>
      </Container>
      <Background options={bgOptions} />
    </>
  );
}
