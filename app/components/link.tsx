import { default as BaseLink } from "next/link";

type LinkProps = React.ComponentProps<typeof BaseLink>;

export default function Link({ children, className, ...props }: LinkProps) {
  return (
    <BaseLink
      {...props}
      className={`${className} text-neutral-900 dark:text-neutral-100 hover:text-brand-300`}
    >
      {children}
    </BaseLink>
  );
}
