import { ComponentProps } from 'react';

interface InfoParagraphProps extends ComponentProps<'p'> {
  title: string;
  info: string | number;
}

export function InfoParagraph({ title, info, ...rest }: InfoParagraphProps) {
  return (
    <p className="flex flex-row justify-between" {...rest}>
      <strong className="text-violet-600">{title}</strong>
      <span className="text-green-600">{info}</span>
    </p>
  );
}
