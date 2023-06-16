import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import imgPhone from "../assets/illustration-phones.svg";
import bgImg from "../assets/bg-pattern-circles.svg";

function Infrastructure() {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={["center", "stretch"]}
      bgColor={"Verydarkgrayblue"}
      bgImage={bgImg}
      bgRepeat="no-repeat"
      bgSize={["cover", "70%"]}
      bgPos={["center -15rem", "-10rem -35rem"]}
      rounded={"0 7rem "}
      minH={["40rem", "23rem"]}
      pos={"relative"}
      mt={["13rem", 0]}
    >
      <Image
        src={imgPhone}
        alt="phones img"
        // w={"full"}
        // h={"full"}
        pos={"absolute"}
        left={["50%", "10%"]}
        top={["-12rem", "50%"]}
        transform={["translate(-50%)", "translate(-10%,-50%)"]}
      />
      <Flex
        direction={"column"}
        align={["center", "end"]}
        gap={6}
        textAlign={["center", "start"]}
        // maxW={'40rem'}
        px={8}
        // bg={"teal"}
        mt={["8rem", 0]}
        flex={1}
        justify={"center"}
      >
        <Flex direction={"column"} maxW={"35rem"} gap={6}>
          <Heading fontSize={"2.5rem"} color={"White"}>
            State of the Art Infrastructure
          </Heading>
          <Text color={"Grayishblue"} lineHeight={"1.8"}>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Infrastructure;
