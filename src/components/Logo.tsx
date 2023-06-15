import LogoImage from "/src/assets/logo.jpg"

type LogoProps = {
	className?: string
};

const Logo = ({ className }: LogoProps) => {
	return (
		<span>
			<img
				src={LogoImage}
				alt="Klick Logo"
				className={className ? className : "w-[250px] md:w-[350px] mr-2"}
			/>
		</span>
	);
};

export default Logo;
