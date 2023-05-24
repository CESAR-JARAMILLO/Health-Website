import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Flex, Link } from '@chakra-ui/react';

function RegisterCard() {
  return (
    <Flex align="center" justify="center" minH="100vh">
      <Box maxW="sm" mx="auto" p={6} borderWidth={1} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb={6}>Register</Heading>
        <form>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" autoComplete="username" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" autoComplete="new-password" />
            </FormControl>
            <FormControl id="confirmPassword">
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" autoComplete="new-password" />
            </FormControl>
            <Button colorScheme="blue">Register</Button>
          </Stack>
        </form>
        <Box mt={4}>
          <Link color="blue.500" href="/login">Already registered? Login</Link>
        </Box>
      </Box>
    </Flex>
  );
}

export default RegisterCard;
