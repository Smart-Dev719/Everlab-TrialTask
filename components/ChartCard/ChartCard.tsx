'use client';
import dynamic from 'next/dynamic';
import { Group, Card, Badge, Text, Flex, Title } from '@mantine/core';
import { ApexOptions } from 'apexcharts';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import InfoIcon from '../icons/InfoIcon';
import classes from './ChartCard.module.css';

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
          fontSize: '18',
          fontWeight: 'bold',
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#AFB4BF'],
    },
    chart: {
      toolbar: {
        show: false,
      },
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
      size: 7,
      colors: ['#fff'],
      strokeWidth: 3,
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
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            width: 340,
            height: 95,
          },
        },
      },
      {
        breakpoint: 375,
        options: {
          chart: {
            width: 250,
            height: 90,
          },
        },
      },
      {
        breakpoint: 320,
        options: {
          chart: {
            width: 280,
            height: 90,
          },
          makers: {
            size: 2,
            strokeWidth: 1,
          },
        },
      },
    ],
  };

  const series = [
    {
      name: 'Everlab',
      color: 'rgb(122, 223, 136)',
      data: [1.5, 1.6, 2.5, 2.6, 2.4],
    },
  ];

  return (
    <Group justify="center" mt="xl">
      <Card shadow="sm" padding="lg" radius="lg" withBorder className={classes.cardBody}>
        <Flex align="center" justify="space-between">
          <Flex align="center" justify="flex-start" gap="8">
            <Badge size="sm" color="#77A06C" className={classes.cardTitle} />
            <Text fw="600" size="xl" className={classes.cardHeader}>
              OPTIMAL
            </Text>
          </Flex>
          <InfoIcon />
        </Flex>
        <Flex align="center" justify="flex-start" gap="8" className={classes.cardInfo}>
          <Title order={3} className={classes.cardTitle}>
            Total Cholesterol
          </Title>
          <Title order={1}>•</Title>
          <Title order={3} className={classes.cardValue}>
            210 mg/dl
          </Title>
        </Flex>
        <ApexChart options={options} series={series} type="area" height={100} width={400} />
      </Card>
    </Group>
  );
}
