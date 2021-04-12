import { Flex, Button, VStack } from "@chakra-ui/react";

import { Input } from '../components/Form/Input'


export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <VStack spacing="4">
          <Input name="email" label="E-mail" type="email" />
          <Input name="password" label="Senha" type="password" />
        </VStack>
        <Button
          type="submit"
          mt="6"
          colorScheme="purple"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
