import Link from "next/link";

type ButtonType = {
  text: string;
  link: string;
};

const Button: React.FC<ButtonType> = ({ link, text }) => {
  return (
    <Link href={link} className="btn" target="_blank">
      {text}
    </Link>
  );
};

export default Button;
