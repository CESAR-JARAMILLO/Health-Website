import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Flex, Link } from '@chakra-ui/react';

function LoginCard() {
  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box maxW="md" mx="auto" p={6} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb={6}>Login</Heading>
        <form>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" autoComplete="username" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" autoComplete="current-password" />
            </FormControl>
            <Button colorScheme="blue">Login</Button>
          </Stack>
        </form>
        <Box mt={4}>
          <Link href="/register" color="blue.500">Not registered? Register</Link>
        </Box>
      </Box>
    </Flex>
  );
}

export default LoginCard;
