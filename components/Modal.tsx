import { ReactNode } from "react";
import { CrossIcon } from "./icons";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="p-4 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
				<div className="flex justify-between items-center p-4 border-b border-gray-light">
					<h3 className="text-lg font-semibold text-gray">{title}</h3>
					<button onClick={onClose}>
						<CrossIcon />
					</button>
				</div>
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
