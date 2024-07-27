import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
	const socialLinks = [
		{
			name: "facebook",
			icon: <FaSquareFacebook />,
			link: "#",
			color: "text-blue-600",
		},
		{
			name: "instagram",
			icon: <FaSquareInstagram />,
			link: "#",
			color: "text-red-600",
		},
		{
			name: "twitter",
			icon: <FaSquareXTwitter />,
			link: "#",
			color: "text-zinc-800",
		},
		{
			name: "linkedin",
			icon: <ImLinkedin />,
			link: "#",
			color: "text-blue-800",
		},
		{
			name: "github",
			icon: <FaGithub />,
			link: "#",
			color: "text-zinc-800",
		},
	];
	return (
		<footer className='  w-full  flex justify-around items-center  p-5  font-bold text-black flex-col gap-5'>
			<div className=' socials  flex gap-10 transition-all '>
				{socialLinks?.map((item) => (
					<a
						href={item?.link}
						key={item?.name}
						className={` transition-all duration-200 hover:scale-110  text-2xl ${item?.color}`}
					>
						{item?.icon}
					</a>
				))}
			</div>

			<div className='copyright   text-black'>
				© 2024{" "}
				<a
					href='http://riday.tech'
					target='_blank'
					rel='noopener noreferrer'
					className=' own-gradien'
				>
					Riday
				</a>
				, all rights reserved
			</div>
		</footer>
	);
};

export default Footer;
