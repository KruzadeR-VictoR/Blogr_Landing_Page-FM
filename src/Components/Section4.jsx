import { Flex, Heading, Image, Show, Text } from "@chakra-ui/react";
import laptopImgMobile from "../assets/illustration-laptop-mobile.svg";
import laptopImgDesktop from "../assets/illustration-laptop-desktop.svg";

function Section4() {
  return (
    <Flex
      direction={["column", "row"]}
      align={"center"}
      minH={"100vh"}
      py={["6rem", "16rem"]}
      // bg={"yellow"}
      bgImage={["none", laptopImgDesktop]}
      bgRepeat={"no-repeat"}
      bgSize={"60%"}
      bgPos={"-14.3rem center"}
    >
      <Show below="md">
        <Image
          src={laptopImgMobile}
          alt="laptop img"
          w={"full"}
          h={"full"}
          transform={"scale(1.3)"}
          mb={"4rem"}
        />
      </Show>
      {/* for large screens  */}
      {/* <Show above="md">
        <Image
          src={laptopImgDesktop}
          alt="laptop img"
          bg="teal"
          w={"full"}
          h={"full"}          
          pos={'relative'}
          left={'-57%'}
          transform={'translate(51%)'}
        />
      </Show> */}
      <Flex
        direction={"column"}
        gap={10}
        align={"end"}
        textAlign={["center", "start"]}
        flex={1}
        // bg={"teal"}
        // maxW={"40rem"}
      >
        <Flex direction={"column"} gap={10} maxW={"40rem"} px={[0, 8]}>
          <Flex direction={"column"} gap={7} px={"2.45rem"}>
            <Heading
              fontSize={"1.6rem"}
              fontWeight={"t_bold"}
              color={"Verydarkblue"}
            >
              Free, open, simple
            </Heading>
            <Text color={"Verydarkgrayishblue"}>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </Text>
          </Flex>
          <Flex direction={"column"} gap={7} px={"2.45rem"}>
            <Heading
              fontSize={"1.6rem"}
              fontWeight={"t_bold"}
              color={"Verydarkblue"}
            >
              Powerful tooling
            </Heading>
            <Text color={"Verydarkgrayishblue"}>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Section4;
