import { Flex, Heading, Hide, Image, Text } from "@chakra-ui/react";
import imgMobile from "../assets/illustration-editor-mobile.svg";
import imgDektop from "../assets/illustration-editor-desktop.svg";

function Feature() {
  return (
    <Flex
      direction={"column"}
      gap={10}
      m={[0, 8]}
      py={"5rem"}
      pos={"relative"}
      bgImage={["none", imgDektop]}
      bgRepeat={"no-repeat"}
      bgSize={"60%"}
      bgPosition={"140%,center"}
      minH={"100vh"}
      // bg={'teal'}
    >
      <Heading
        textAlign={"center"}
        fontSize={["1.6rem", "2rem"]}
        fontWeight={"t_bold"}
        color={"Verydarkblue"}
      >
        Designed for the future
      </Heading>
      <Flex
        flex={1}
        direction={["column", "row-reverse"]}
        justify={("start", "center")}
        align={["auto", "center"]}
        gap={[10, 0]}
      >
        <Hide above="md">
          <Image
            src={imgMobile}
            alt="illustration img"
            width="100%"
            height="100%"
          />
        </Hide>
        {/* <Image
          src={imgDektop}
          alt="illustration image"
          // pos={"absolute"} 
          w={'45rem'} 
          top={'0'}       
          right={'-10rem'}
        /> */}
        <Flex flex={1} direction={"column"} gap={[10, 14]}>
          <Flex
            direction={"column"}
            align={["center", "start"]}
            gap={4}
            textAlign={["center", "start"]}
            px={10}
            maxW={"40rem"}
          >
            <Heading
              fontSize={"1.6rem"}
              fontWeight={"t_bold"}
              color={"Verydarkblue"}
            >
              Introducing an extensible editor
            </Heading>
            <Text fontSize={".9rem"} color={"Verydarkgrayishblue"}>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            align={["center", "start"]}
            gap={4}
            textAlign={["center", "start"]}
            px={10}
            maxW={"40rem"}
          >
            <Heading
              fontSize={"1.6rem"}
              fontWeight={"t_bold"}
              color={"Verydarkblue"}
            >
              Robust content management
            </Heading>
            <Text fontSize={".9rem"} color={"Verydarkgrayishblue"}>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Feature;
