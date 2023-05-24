import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

function LoginCard() {
  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb={6}>Login</Heading>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="blue">Login</Button>
        </Stack>
        <Box mt={4}>
          <NextLink href="/register" passHref>
            <Link color="blue.500">Not registered? Register</Link>
          </NextLink>
        </Box>
      </Box>
    </Flex>
  );
}

export default LoginCard;
