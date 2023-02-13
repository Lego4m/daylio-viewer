import { Heading, Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Heading as="h1" fontSize="2xl">
      <Text as="span" color="purple.500">
        Daylio
      </Text>{' '}
      <Text as="span" color="green.500">
        Viewer
      </Text>
    </Heading>
  );
}
