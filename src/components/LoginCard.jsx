import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Flex } from '@chakra-ui/react';

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
      </Box>
    </Flex>
  );
}

export default LoginCard;
