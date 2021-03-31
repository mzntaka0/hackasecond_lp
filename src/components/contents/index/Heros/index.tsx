import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  Tooltip,
  useClipboard,
  useToast
} from "@chakra-ui/react";
import {
  AiOutlineMail
} from 'react-icons/ai'
import {
  BsCalendar
} from 'react-icons/bs'

const Component: React.FC = () => {
  const email = process.env.email
	const toast = useToast()
  const {onCopy, hasCopied} = useClipboard(process.env.EMAIL || '')
  const contactOnClick = () => {
    onCopy()
		toast({
			title: "You copied info email address!!",
			description: "You can send an email to 'info@hackasecond.com' on any email service",
			status: "success",
			duration: 9000,
			isClosable: true,
		})
  }
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >
          Enhance the value of your{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            PRECIOUS TIME
          </Text>{" "}
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600",'gray.300')}
        >
          by using "Information Technology" whatever you want.
        </chakra.p>
        <Stack
        direction={{base:"column",sm:"row"}}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Button
            as="a"
            colorScheme="gray"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            href="https://biskett.me/mzntaka0/other"
            target='_blank'
            size="lg"
            leftIcon={<BsCalendar />}
          >
            Book a Schedule
          </Button>
          <Tooltip label='Copy "info@hackasecond.com"' aria-label="A tooltip">
            <Button
              as="a"
              variant="solid"
              colorScheme="blue"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              href="#"
              size="lg"
              leftIcon={<AiOutlineMail />}
              onClick={contactOnClick}
            >
              Contact
            </Button>
          </Tooltip>
        </Stack>
      </Box>
      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://kutty.netlify.app/hero.jpg"
          alt="Hellonext feedback boards software screenshot"
        />
        This page introduces "Hack a second" produced by Takao Mizuno(@mzntaka0)
      </Box>
    </Box>
  );
};

export default Component;
