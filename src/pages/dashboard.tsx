import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options = {
  stroke: {
    show: true,
    colors: [theme.colors.purple[300]],
    width: 3,
  },
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-04-10T00:00:00.000Z',
      '2021-04-11T00:00:00.000Z',
      '2021-04-12T00:00:00.000Z',
      '2021-04-13T00:00:00.000Z',
      '2021-04-14T00:00:00.000Z',
    ],
  },
  fill: {
    colors: [theme.colors.purple[500]],
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.1,
    },
  },
};

const seriesOne = [{ name: 'series1', data: [18, 200, 10, 25, 80] }];
const seriesTwo = [{ name: 'series1', data: [38, 56, 125, 60, 20] }];

export default function Dashboard() {
  return (
    <Flex flexDirection="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Projetos da Semana
            </Text>
            <Chart
              options={options}
              series={seriesOne}
              type="area"
              height={160}
            />
          </Box>
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
            <Chart
              options={options}
              series={seriesTwo}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
