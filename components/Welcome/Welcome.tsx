import { Title, Text, Button, Group } from '@mantine/core';

export function Welcome() {
  return (
    <>
      <Title ta="center" pt={100} order={1} lts={1}>
        Trial Task for{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Everlab
        </Text>
      </Title>
      <Group justify="center" gap="xs" pt={50}>
        <Button variant='default' color='gray' size='xl'>Default</Button>
        <Button variant='default' color='beige' size='xl'>Default</Button>
        <Button variant='white' color='gray' size='xl'>White</Button>
        <Button variant='white' color='beige' size='xl'>White</Button>   
        <Button variant='outline' color='gray' size='xl'>Outline</Button>
        <Button variant='outline' color='beige' size='xl'>Outline</Button>  
        <Button variant='filled' color='gray' size='xl'>Filled</Button>
        <Button variant='filled' color='beige' size='xl'>Filled</Button>  
        <Button variant='filled' color='gray' size='xl' disabled>Filled</Button>
        <Button variant='filled' color='beige' size='xl' disabled>Filled</Button>   
        <Button variant='light' color='gray' size='xl'>Light</Button>
        <Button variant='light' color='beige' size='xl'>Light</Button>     
        <Button variant='subtle' color='gray' size='xl'>Subtle</Button>
        <Button variant='subtle' color='beige' size='xl'>Subtle</Button>  
      </Group>
    </>
  );
}
