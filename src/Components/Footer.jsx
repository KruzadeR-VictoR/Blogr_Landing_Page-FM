import {
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <Flex
      direction={["column", "row"]}
      //   justify={"center"}
      align={["center", "start"]}
      bg={"charcoalBlack"}
      py={"5rem"}
      rounded={"0 6rem 0 0"}
      gap={["3rem",'12rem']}
      // justify={'center'}
      pl={[0,'8em']}
    >
      <Image src={logo} alt="logo" transform={"scale(.9)"} />
      {/* Products  */}
      <Flex direction={"column"} gap={5} textAlign={["center",'start']} mt={["5", 0]}>
        <Heading fontSize={"1rem"} fontWeight={"t_bold"} color={"White"}>
          Product
        </Heading>
        <UnorderedList
          listStyleType={"none"}
          m={0}
          sx={{ display: "flex", flexDir: "column", gap: "2" }}
        >
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Overview
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Pricing
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Marketplace
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Features
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Integrations
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
      {/* Company  */}
      <Flex direction={"column"} gap={5} textAlign={["center",'start']}>
        <Heading fontSize={"1rem"} fontWeight={"t_bold"} color={"White"}>
          Product
        </Heading>
        <UnorderedList
          listStyleType={"none"}
          m={0}
          sx={{ display: "flex", flexDir: "column", gap: "2" }}
        >
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Team
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Blog
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Careers
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
      {/* Connect  */}
      <Flex direction={"column"} gap={5} textAlign={["center",'start']}>
        <Heading fontSize={"1rem"} fontWeight={"t_bold"} color={"White"}>
          Product
        </Heading>
        <UnorderedList
          listStyleType={"none"}
          m={0}
          sx={{ display: "flex", flexDir: "column", gap: "2" }}
        >
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Contact
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              Newsletter
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize={"1rem"} color={"Grayishblue"}>
              LinkedIn
            </Link>
          </ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
}

export default Footer;
