import MGLogoFooter from "../Icons/branding/MGLogoFooter";

let Footer = (): JSX.Element => {
	return (
		<>
			<footer>
				<p className="text-slate-600 dark:text-slate-300 flex justify-center items-center py-10">
					Made with&nbsp;<span className="text-blue-500">❤</span>
					&nbsp;by&nbsp;
					<a
						href="http://github.com/milindgoel15"
						target="_blank"
						rel="noopener noreferrer"
					>
						<MGLogoFooter className="w-16" />
					</a>
				</p>
			</footer>
		</>
	);
};

export default Footer;
