'use client';
import dynamic from 'next/dynamic';
import { Group, Card, Text, Flex } from '@mantine/core';
import { ApexOptions } from 'apexcharts';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import InfoIcon from '../icons/InfoIcon';

export function ChartCard() {
  const options: ApexOptions = {
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      max: 2.6,
      min: 1,
      tickAmount: 1,
      labels: {
        style: {
          colors: '#77A06C',
          fontSize: '10',
          fontWeight: '600',
          fontFamily: 'Inter, sans-serif',
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      colors: ['#AFB4BF'],
    },
    chart: {
      toolbar: {
        show: false,
      },
      offsetX: -13,
      offsetY: -10,
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      borderColor: '#77A06C',
      strokeDashArray: 10,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 0.8,
      type: 'gradient',
    },
    markers: {
      size: 3,
      colors: ['#fff'],
      strokeWidth: 2,
      strokeColors: '#AFB4BF',
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
  };

  const series = [
    {
      name: 'Everlab',
      color: '#77A06C',
      data: [1.5, 1.6, 2.5, 2.6, 2.4],
    },
  ];

  return (
    <Group justify="center" mt="xl">
      <Card shadow="sm" padding="md" radius="lg" withBorder maw={220} mah={129}>
        <Flex align="center" justify="space-between">
          <Flex align="center" justify="flex-start" gap={4} py={4} pl={5}>
            <Text
              component="div"
              size="sm"
              bg="#77A06C"
              fw="500"
              w={6}
              h={6}
              style={{ borderRadius: '100%' }}
            />
            <Text fw="500" fz={8} lh="12px" lts={0} c="#221F20">
              OPTIMAL
            </Text>
          </Flex>
          <InfoIcon />
        </Flex>
        <Flex align="center" justify="flex-start" gap="4" pl={5}>
          <Text fw="500" fz={10} lh="12px" c="#221F20">
            Total Cholesterol
          </Text>
          <Text fw="500" fz={10} lh="12px" c="#221F20">
            •
          </Text>
          <Text fw="500" fz={10} lh="12px" c="#77A06C">
            210 mg/dl
          </Text>
        </Flex>
        <ApexChart options={options} series={series} type="area" height={70} width={200} />
      </Card>
    </Group>
  );
}
