import { Text, TextProps } from '@chakra-ui/react';

interface InfoParagraphProps extends TextProps {
  title: string;
  info: string | number;
}

export function InfoParagraph({ title, info, ...rest }: InfoParagraphProps) {
  return (
    <Text
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      textTransform="capitalize"
      {...rest}
    >
      <Text as="strong" color="purple.500">
        {title}
      </Text>

      <Text as="span" color="green.500">
        {info}
      </Text>
    </Text>
  );
}
