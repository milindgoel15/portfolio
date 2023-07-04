let Footer = (): JSX.Element => {
	return (
		<>
			<footer>
				<p className="text-slate-600 dark:text-slate-300 flex justify-center text-center py-10">
					Made with&nbsp;<span className="text-red-600">❤</span>
					&nbsp;by&nbsp;
					<a
						className="text-blue-600 transition-all hover:text-blue-400"
						href="http://github.com/milindgoel15"
						target="_blank"
						rel="noopener noreferrer"
					>
						Milind Goel
					</a>
				</p>
			</footer>
		</>
	);
};

export default Footer;
