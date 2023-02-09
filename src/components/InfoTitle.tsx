import { ComponentProps } from 'react';

interface InfoTitleProps extends ComponentProps<'h1'> {}

export function InfoTitle({ children, ...rest }: InfoTitleProps) {
  return (
    <h1 className="mb-2 text-center text-lg font-bold" {...rest}>
      {children}
    </h1>
  );
}
