import {
  Flex,
  Button,
  VStack,
  SlideFade,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useRouter } from 'next/router';
import { Input } from '../components/Form/Input';
import { Logo } from '../components/Header/Logo';

type SignInFormaData = {
  email: string;
  password: string;
};

const signInFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: Yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;
  const router = useRouter();

  const handleSignIn: SubmitHandler<SignInFormaData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push('/dashboard');
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      flexDirection={isWideVersion ? 'row' : 'column'}
    >
      <SlideFade in offsetY="20px">
        <Flex textAlign="center">
          <Logo />
        </Flex>
      </SlideFade>
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <VStack spacing="4">
          <Input
            name="email"
            label="E-mail"
            type="email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            error={errors.password}
            {...register('password')}
          />
        </VStack>
        <Button
          type="submit"
          mt="6"
          colorScheme="purple"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
