import Image from "next/image";
import { BellIcon, ChevronIcon, QuestionIcon } from "./icons";
import UserImg from "@/public/assets/images/user.svg";

const Navbar = () => {
	return (
		<div className="h-[67px] bg-white flex items-center justify-end divide-[#EAECF0]">
			<div className="container divide-x divide-gray-light flex justify-end">
				<div className="flex items-center gap-[7px] mr-5">
					<QuestionIcon />
					<div className="flex items-center gap-[7px]">
						<span className="font-medium text-gray">Qzcy Help</span>
						<span className="rotate-180">
							<ChevronIcon />
						</span>
					</div>
				</div>
				<div className="w-[80px] flex justify-center">
					<BellIcon />
				</div>
				<div className="w-[80px] flex justify-center">
					<Image src={UserImg} alt="rider-icon" />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
