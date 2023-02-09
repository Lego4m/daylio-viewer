import { ComponentProps } from 'react';

interface InfoSectionProps extends ComponentProps<'section'> {}

export function InfoSection({ children, ...rest }: InfoSectionProps) {
  return (
    <section
      className="flex flex-1 flex-col rounded-lg bg-white p-4 shadow"
      {...rest}
    >
      {children}
    </section>
  );
}
