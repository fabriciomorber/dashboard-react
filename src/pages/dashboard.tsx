import { Header } from "@/src/components/Header"
import dynamic from "next/dynamic"
import { Box, Text, Flex, SimpleGrid, theme } from "@chakra-ui/react"
import { Sidebar } from "@/src/components/Sidebar"
import { ApexOptions } from "apexcharts"

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2025-05-08T00:00:00.000Z',
      '2025-05-09T00:00:00.000Z',
      '2025-05-10T00:00:00.000Z',
      '2025-05-11T00:00:00.000Z',
      '2025-05-12T00:00:00.000Z',
      '2025-05-13T00:00:00.000Z',
      '2025-05-14T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
    }
  }
}

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 109] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}