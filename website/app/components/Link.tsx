import { Link as InternalLink } from "@remix-run/react";
import type { ComponentProps } from "react";
import { useHref } from "~/context";
import { isExternalLink } from "~/utils";

type LinkProps = {
  ignoreLocale?: boolean;
} & ComponentProps<"a">;

export function Link(props: LinkProps) {
  const href = useHref(props.href ?? "", props.ignoreLocale);

  if (isExternalLink(props.href ?? "")) {
    return (
      <a rel="noopener noreferrer" target="_blank" {...props} href={href} />
    );
  }

  return <InternalLink {...props} to={href} />;
}
