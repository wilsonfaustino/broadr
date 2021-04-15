import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  const { data, isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const responseData = await response.json();

    const users = responseData.users.map(user => {
      return {
        ...user,
        createdAt: new Date(user.createdAt).toLocaleString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      };
    });

    return users;
  });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="purple"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha" size="sm">
                <Thead>
                  <Tr>
                    <Th px={['4', '4', '6']} color="gray.300" w="8">
                      <Checkbox colorScheme="purple" />
                    </Th>
                    <Th>Usuário</Th>
                    <Th>Atribuição</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}
                    <Th w="6" />
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="purple" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Wilson Faustino</Text>
                        <Text fontSize="sm">wilson.rfaustino@gmail.com</Text>
                      </Box>
                    </Td>
                    <Td>
                      <Text>Administrador</Text>
                    </Td>
                    {isWideVersion && (
                      <Td>
                        <Text>14 de Julho, 2014</Text>
                      </Td>
                    )}
                    <Td>
                      <IconButton
                        variant="ghost"
                        colorScheme="purple"
                        aria-label="Editar"
                        fontSize="20"
                        borderRadius="full"
                        icon={<RiPencilLine />}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="purple" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Cyro Stanisco</Text>
                        <Text fontSize="sm">cyro@paintpack.com.br</Text>
                      </Box>
                    </Td>
                    <Td>
                      <Text>Gestor</Text>
                    </Td>
                    {isWideVersion && (
                      <Td>
                        <Text>14 de Julho, 2014</Text>
                      </Td>
                    )}
                    <Td>
                      <IconButton
                        variant="ghost"
                        colorScheme="purple"
                        aria-label="Editar"
                        fontSize="20"
                        borderRadius="full"
                        icon={<RiPencilLine />}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="purple" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Marcia Sousa</Text>
                        <Text fontSize="sm">marcia@paintpack.com.br</Text>
                      </Box>
                    </Td>
                    <Td>
                      <Text>Gestor</Text>
                    </Td>
                    {isWideVersion && (
                      <Td>
                        <Text>14 de Julho, 2014</Text>
                      </Td>
                    )}
                    <Td>
                      <IconButton
                        variant="ghost"
                        colorScheme="purple"
                        aria-label="Editar"
                        fontSize="20"
                        borderRadius="full"
                        icon={<RiPencilLine />}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="purple" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">Marcelo Medeiros</Text>
                        <Text fontSize="sm">marcelo@paintpack.com.br</Text>
                      </Box>
                    </Td>
                    <Td>
                      <Text>Operador</Text>
                    </Td>
                    {isWideVersion && (
                      <Td>
                        <Text>14 de Julho, 2014</Text>
                      </Td>
                    )}
                    <Td>
                      <IconButton
                        variant="ghost"
                        colorScheme="purple"
                        aria-label="Editar"
                        fontSize="20"
                        borderRadius="full"
                        icon={<RiPencilLine />}
                      />
                    </Td>
                  </Tr>
                  {data.map(user => (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme="purple" />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{user.name}</Text>
                          <Text fontSize="sm">user.email</Text>
                        </Box>
                      </Td>
                      <Td>
                        <Text>Operador</Text>
                      </Td>
                      {isWideVersion && (
                        <Td>
                          <Text>{user.createdAt}</Text>
                        </Td>
                      )}
                      <Td>
                        <IconButton
                          variant="ghost"
                          colorScheme="purple"
                          aria-label="Editar"
                          fontSize="20"
                          borderRadius="full"
                          icon={<RiPencilLine />}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
