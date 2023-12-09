interface TFooterText {
  children: string;
}

export default function FooterText({ children }: TFooterText) {
  return <span className="text-3xl">{children}</span>;
}
