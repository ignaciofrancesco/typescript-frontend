interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  const { title } = props;

  return <h1>{title}</h1>;
};

export default Header;
