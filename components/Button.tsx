import { ReactNode } from "react";

interface Props {
	children?: ReactNode;
}

const Button = ({ children }: Props) => {
	return <button>{children}</button>;
};

export default Button;
