import { Box, VStack, Image, Text, Link, Button } from '@chakra-ui/react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Image borderRadius="full" boxSize="150px" src="/images/jared-profile.jpg" alt="Jared Ingersoll" />
        <Text mt={2} fontSize="xl" fontWeight="bold">Jared Ingersoll</Text>
        <Text mt={2}>Software Engineer | Web Developer | Tech Enthusiast</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Text fontSize="2xl" fontWeight="bold">Biography</Text>
        <Text mt={2}>
          Jared is a seasoned software engineer with over 10 years of experience in building scalable web applications. His passion for technology and innovation drives him to constantly explore new tools and techniques to improve his craft.
        </Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Text fontSize="2xl" fontWeight="bold">Portfolio</Text>
        <Link href="https://github.com/jaredingersoll" isExternal mt={2}>
          <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
            GitHub
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/jaredingersoll" isExternal mt={2}>
          <Button leftIcon={<FaLinkedin />} colorScheme="teal" variant="solid">
            LinkedIn
          </Button>
        </Link>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Text fontSize="2xl" fontWeight="bold">Contact</Text>
        <Link href="mailto:jared@example.com" isExternal mt={2}>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
            Email Me
          </Button>
        </Link>
      </Box>
    </VStack>
  );
};

export default Index;