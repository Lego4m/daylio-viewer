import { Heading, HeadingProps } from '@chakra-ui/react';

export function InfoTitle({ children, ...rest }: HeadingProps) {
  return (
    <Heading mb={2} textAlign="center" fontSize="lg" {...rest}>
      {children}
    </Heading>
  );
}
