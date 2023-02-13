import { Flex, FlexProps } from '@chakra-ui/react';

export function InfoSection({ children, ...rest }: FlexProps) {
  return (
    <Flex
      as="section"
      flex={1}
      flexDir="column"
      rounded="md"
      backgroundColor="white"
      p={4}
      shadow="base"
      {...rest}
    >
      {children}
    </Flex>
  );
}
