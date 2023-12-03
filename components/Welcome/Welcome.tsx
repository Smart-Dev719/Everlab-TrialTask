import { Title, Text } from '@mantine/core';

export function Welcome() {
  return (
    <>
      <Title ta="center" pt={100} order={1} lts={1}>
        Trial Task for{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Everlab
        </Text>
      </Title>
    </>
  );
}
