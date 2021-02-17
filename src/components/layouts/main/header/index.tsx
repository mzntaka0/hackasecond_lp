import React from "react";
import {useRouter} from 'next/router'
import {
  chakra,
  HStack,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  SimpleGrid,
  Stack,
  Spacer,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineCode } from "react-icons/ai";
import { BsFillCameraVideoFill, BsDisplay, BsGear } from "react-icons/bs";
import {BiBookAlt, BiPlug} from 'react-icons/bi'
import {FaAssistiveListeningSystems} from 'react-icons/fa'
import {GoGraph} from 'react-icons/go'
import {RiLinksFill} from 'react-icons/ri'
import { FaMoon, FaSun } from "react-icons/fa";

import Logo from "components/atoms/Logo";


const Section: React.FC = () => {
  const router = useRouter()
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef<HTMLElement>();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const Section = (props: {icon?: JSX.Element, title: string, description?: JSX.Element, link: string,  children: React.ReactNode}) => {
    const ic = useColorModeValue("brand.600", "brand.50");
    const hbg = useColorModeValue("gray.50", "brand.400");
    const tcl = useColorModeValue("gray.900", "gray.50");
    const dcl = useColorModeValue("gray.500", "gray.50");
    return (
      <Link
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
        href={props.link}
      >
        <chakra.svg
          flexShrink={0}
          h={10}
          w={10}
          color={ic}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </chakra.svg>
        <Box ml={4}>
          <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
            {props.title}
          </chakra.p>
          <chakra.p mt={1} fontSize="sm" color={dcl}>
            {props.children}
          </chakra.p>
        </Box>
      </Link>
    );
  };

  const Services = (props: {h?: number}) => {
    const hbg = useColorModeValue("gray.50", "brand.400");
    const hbgh = useColorModeValue("gray.100", "brand.500");
    const tcl = useColorModeValue("gray.900", "gray.50");
    return (
      <React.Fragment>
        <SimpleGrid
          columns={props.h ? { base: 1, md: 3, lg: 5 } : 1}
          pos="relative"
          gap={{ base: 6, sm: 8 }}
          px={5}
          py={6}
          p={{ sm: 8 }}
        >
          <Section
            title="Machine Learning"
            icon={<GoGraph />}
            link='/services/machine_learning'
          >
            Get a better accuracy ML model by customizing for you.
          </Section>

          <Section
            title="Frontend"
            icon={<BsDisplay />}
            link='/services/frontend'
          >
            Make a better "User Interface" to make your product more valuable.
          </Section>

          <Section
            title="Create API"
            icon={<BiPlug />}
            link='/services/api'
          >
            Provide good services which is highly sophisticated.
          </Section>

          <Section
            title="Contract Development"
            icon={<AiOutlineCode />}
            link='/services/contract_development'
          >
            Customize anything for your needs.
          </Section>

          <Section
            title="Integration"
            icon={<RiLinksFill />}
            link='/services/integration'
          >
            Build your solution faster using the shoulder of giants.
          </Section>
          <Section
            title="Consultation"
            icon={<FaAssistiveListeningSystems />}
            link='/services/consultation'
          >
            Define your issue/problem first.
          </Section>
          <Section
            title="Education"
            icon={<BiBookAlt />}
            link='/services/education'
          >
            Know a practical knowledge of "Computer Science".
          </Section>
        </SimpleGrid>
        <Box px={{ base: 5, sm: 8 }} py={5} bg={hbg} display={{ sm: "flex" }}>
          <Stack direction={{ base: "row" }} spacing={{ base: 6, sm: 10 }}>
            <Box display="flow-root">
              <Link
                href="#"
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
                _hover={{ bg: hbgh }}
              >
                <chakra.svg
                  flexShrink={0}
                  h={6}
                  w={6}
                  color="gray.400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </chakra.svg>
                <chakra.span ml={3}>See Portfolio</chakra.span>
              </Link>
            </Box>

            <Box display="flow-root">
              <Link
                href="#"
                m={-3}
                p={3}
                display="flex"
                alignItems="center"
                rounded="md"
                fontSize="md"
                color={tcl}
                _hover={{ bg: hbgh }}
              >
                <chakra.svg
                  flexShrink={0}
                  h={6}
                  w={6}
                  color="gray.400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </chakra.svg>
                <chakra.span ml={3}>Contact</chakra.span>
              </Link>
            </Box>
          </Stack>
        </Box>
      </React.Fragment>
    );
  };

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" href="#" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        href="#"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button
        w="full"
        variant="ghost"
        href="#"
        leftIcon={<BsFillCameraVideoFill />}
      >
        Videos
      </Button>
    </VStack>
  );

  return (
    <React.Fragment>
      <chakra.header
        // @ts-ignore
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
        boxShadow='2xl'
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start">
              <Link href="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
            </Flex>
            <Flex>
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  onClick={() => router.push('/')}
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  Home
                </Button>
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  onClick={() => router.push('/about')}
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  About
                </Button>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      bg={bg}
                      color="gray.500"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: "none" }}
                      rightIcon={<IoIosArrowDown />}
                    >
                      Services
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    w="100vw"
                    maxW="md"
                    _focus={{ boxShadow: "md" }}
                  >
                    <Services />
                  </PopoverContent>
                </Popover>
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  onClick={() => router.push('/pricing')}
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  Pricing
                </Button>
                <Button
                  bg={bg}
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  onClick={() => router.push('/blogs')}
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  Blog
                </Button>
              </HStack>
            </Flex>
            <Spacer />
            <Flex justify="flex-end" align="center" color="gray.400">
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}


export default Section
