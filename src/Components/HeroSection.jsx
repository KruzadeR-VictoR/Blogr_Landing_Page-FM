import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Hide,
  IconButton,
  Link,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalContent,
  Show,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import imgMobile from "../assets/bg-pattern-intro-mobile.svg";
import imgDesktop from "../assets/bg-pattern-intro-desktop.svg";
import logo from "../assets/logo.svg";
// import hamburger_icon from "../assets/icon-hamburger.svg";
import Hamburger from "./Hamburger";
import CloseBtn from "./CloseBtn";
import DownArrow from "./DownArrow";
// import { useState } from "react";

function HeroSection() {
  // const [isOpen, setIsOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleMenu = () => {
    // console.log(document.body);
    onOpen();
    // document.body.style.marginLeft = "56 !important";
  };

  const hoverStyle = {
    textDecoration: "none",
    fontWeight: "Bold",
  };

  return (
    <>
      <Flex
        direction={"column"}
        w={"full"}
        h={"35rem"}
        bgImage={[
          `linear(to-br,hsla(13, 100%, 72%,.95),hsla(353, 100%, 62%,.9)),url(${imgMobile})`,
          `linear(to-br,hsla(13, 100%, 72%,.95),hsla(353, 100%, 62%,.9)),url(${imgDesktop})`,
        ]}
        bgSize={["400%", "250%"]}
        bgRepeat="no-repeat"
        bgPos={["center,-25rem -20rem", "center,-20rem"]}
        rounded={"0 0 0 10rem"}
        pos={"relative"}
      >
        <Flex
          justify={"space-between"}
          align={"center"}
          // bg={"teal"}
          p={"2"}
          px={"6"}
          pt={"3rem"}
        >
          <img src={logo} alt="logo" width="70" height="100" />
          {/* Mobile menu  */}
          <Show
            //  breakpoint="(max-width:400px)"
            below="md"
          >
            <IconButton
              variant={"none"}
              icon={isOpen ? <CloseBtn /> : <Hamburger />}
              onClick={handleMenu}
            />
          </Show>
          {/* Desktop Menu  */}
          <Hide below="md">
            <Flex
              flex={1}
              justify={"space-between"}
              align={"center"}
              // bg={"teal"}
              p={2}
              ps={14}
            >
              <Flex>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<DownArrow color="#FFF" />}
                    color={"whiteAlpha.800"}
                    bg={"transparent"}
                    fontSize={".9rem"}
                    _hover={{
                      bg: "transparent",
                      color: "White",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "none",
                      color: "White",
                    }}
                  >
                    Product
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        Overview
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Pricing
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Marketplace
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Features
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Integrations
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<DownArrow color="#FFF" />}
                    color={"whiteAlpha.800"}
                    bg={"transparent"}
                    fontSize={".9rem"}
                    _hover={{
                      bg: "transparent",
                      color: "White",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "none",
                      color: "White",
                    }}
                  >
                    Company
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Overview
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Pricing
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Marketplace
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Features
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Integrations
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<DownArrow color="#FFF" />}
                    color={"whiteAlpha.800"}
                    bg={"transparent"}
                    fontSize={".9rem"}
                    _hover={{
                      bg: "transparent",
                      color: "White",
                    }}
                    _focus={{
                      bg: "transparent",
                    }}
                    _active={{
                      bg: "none",
                      color: "White",
                    }}
                  >
                    Connect
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Overview
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Pricing
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Marketplace
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Features
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link href="#" _hover={hoverStyle}>
                        {" "}
                        Integrations
                      </Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              {/* Right side  */}
              <Flex align={"center"} gap={7}>
                <Link
                  href="#"
                  color={"whiteAlpha.800"}
                  _hover={{ color: "White" }}
                >
                  Login
                </Link>
                <Button
                  color={"Lightred"}
                  fontSize={".9rem"}
                  p={5}
                  px={7}
                  rounded={"100px"}
                  _hover={{
                    color: "White",
                    bg: "Lightred",
                  }}
                >
                  Sign Up
                </Button>
              </Flex>
            </Flex>
          </Hide>
        </Flex>
        <Flex
          flex={"1"}
          direction={"column"}
          justify={"start"}
          align={"center"}
          gap={4}
          //   bg={"teal"}
        >
          <Heading
            textAlign={"center"}
            fontSize={["2rem", "3rem"]}
            maxW={["18rem", "50rem"]}
            color={"White"}
            mt={"5rem"}
          >
            A modern publishing platform
          </Heading>
          <Text
            color={"whiteAlpha.800"}
            fontSize={["auto", "1.1rem"]}
            textAlign={"center"}
            maxW={["18rem", "50rem"]}
          >
            Grow your audience and build your online brand
          </Text>
          <ButtonGroup gap={2} mt={6}>
            <Button
              bg={"White"}
              color={"Verylightred"}
              rounded={"50px"}
              fontSize={[".9rem", "1rem"]}
              p={["5", 6]}
              _hover={{
                color: "White",
                bg: "Lightred",
              }}
            >
              Start for Free
            </Button>
            <Button
              variant={"outline"}
              color={"White"}
              rounded={"50px"}
              fontSize={[".9rem", "1rem"]}
              p={["5", 6]}
              _hover={{
                color: "Verylightred",
                bg: "White",
              }}
            >
              Learn More
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent m={0}>
          <Flex
            direction={"column"}
            justify={"start"}
            align={"center"}
            minH={"70vh"}
            w={"90%"}
            pos={"absolute"}
            top={"8rem"}
            left={"50%"}
            transform={"translate(-50%)"}
            py={8}
            px={6}
            rounded={"md"}
            bg={"White"}
            shadow={"2xl"}
          >
            {/* Accordions Links */}
            <Accordion
              allowToggle
              w={"100%"}
              sx={{ display: "flex", flexDir: "column", gap: "3" }}
            >
              <AccordionItem
                border={"none"}
                sx={{ display: "flex", flexDir: "column" }}
              >
                <h2>
                  <AccordionButton
                    justifyContent={"center"}
                    gap={2}
                    bg={"White"}
                    _focus={{ bg: "White" }}
                  >
                    <Box
                      as="span"
                      color={"Verydarkblue"}
                      fontWeight={"extraBold"}
                    >
                      Product
                    </Box>
                    <AccordionIcon color={"Verylightred"} />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  bg={"blackAlpha.100"}
                  mt={3}
                  pb={4}
                  py={5}
                  rounded={"md"}
                  shadow={"none"}
                >
                  <UnorderedList
                    listStyleType={"none"}
                    textAlign={"center"}
                    m={0}
                    sx={{
                      display: "flex",
                      flexDir: "column",
                      gap: "3",
                      color: "Verydarkblue",
                      fontWeight: "extraBold",
                    }}
                  >
                    <ListItem>
                      <Link href="#" sx={{ textDecoration: "none" }}>
                        Overview
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link>Pricing</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Marketplace</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Features</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Integrations</Link>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={"none"}
                sx={{ display: "flex", flexDir: "column" }}
              >
                <h2>
                  <AccordionButton
                    justifyContent={"center"}
                    gap={2}
                    bg={"White"}
                    _focus={{ bg: "White" }}
                  >
                    <Box
                      as="span"
                      color={"Verydarkblue"}
                      fontWeight={"extraBold"}
                    >
                      Company
                    </Box>
                    <AccordionIcon color={"Verylightred"} />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  bg={"blackAlpha.100"}
                  mt={3}
                  pb={4}
                  py={5}
                  rounded={"md"}
                  shadow={"none"}
                >
                  <UnorderedList
                    listStyleType={"none"}
                    textAlign={"center"}
                    m={0}
                    sx={{
                      display: "flex",
                      flexDir: "column",
                      gap: "3",
                      color: "Verydarkblue",
                      fontWeight: "extraBold",
                    }}
                  >
                    <ListItem>
                      <Link href="#" sx={{ textDecoration: "none" }}>
                        Overview
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link>Pricing</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Marketplace</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Features</Link>
                    </ListItem>
                    <ListItem>
                      <Link>Integrations</Link>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border={"none"}
                sx={{ display: "flex", flexDir: "column" }}
              >
                <h2>
                  <AccordionButton
                    justifyContent={"center"}
                    gap={2}
                    bg={"White"}
                    _focus={{ bg: "White" }}
                  >
                    <Box
                      as="span"
                      color={"Verydarkblue"}
                      fontWeight={"extraBold"}
                    >
                      Connect
                    </Box>
                    <AccordionIcon color={"Verylightred"} />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  bg={"blackAlpha.100"}
                  mt={3}
                  pb={4}
                  py={5}
                  rounded={"md"}
                  shadow={"none"}
                >
                  <UnorderedList
                    listStyleType={"none"}
                    textAlign={"center"}
                    m={0}
                    sx={{
                      display: "flex",
                      flexDir: "column",
                      gap: "3",
                      color: "Verydarkblue",
                      fontWeight: "extraBold",
                    }}
                  >
                    <ListItem>
                      <Link href="#" sx={{ textDecoration: "none" }}>
                        Contact
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link>Newsletter</Link>
                    </ListItem>
                    <ListItem>
                      <Link>LinkedIn</Link>
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* Divider  */}
            <Divider py={3} />
            {/* Login & Sign Up  */}
            <Flex direction={"column"} align={"center"} gap={5} mt={8}>
              <Link
                href="#"
                sx={{ color: "Verydarkblue", fontWeight: "extraBold" }}
              >
                Login
              </Link>
              <Button
                bgGradient={"linear(to-r,Verylightred,Lightred)"}
                color={"White"}
                px={10}
                py={6}
                rounded={"50px"}
                sx={{}}
              >
                Sign Up
              </Button>
            </Flex>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}

export default HeroSection;
