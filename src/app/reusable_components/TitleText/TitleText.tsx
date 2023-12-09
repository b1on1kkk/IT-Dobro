interface TTitleText {
  children: string;
}

export default function TitleText({ children }: TTitleText) {
  return <div className="text-3xl">{children}</div>;
}
