import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

function RegisterCard() {
  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box maxW="sm" mx="auto" p={6} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb={6}>Register</Heading>
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue">Register</Button>
        </Stack>
        <Box mt={4}>
          <NextLink href="/login" passHref>
            <Link color="blue.500">Already registered? Login</Link>
          </NextLink>
        </Box>
      </Box>
    </Flex>
  );
}

export default RegisterCard;
