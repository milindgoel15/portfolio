type LanguageItemProps = {
	tech: string;
};

const LanguageItem = ({ tech }: LanguageItemProps) => {
	return (
		<>
			<span key={tech} className="text-xs px-3 py-1 rounded-full bg-gray-300 dark:bg-gray-800">
				{tech}
			</span>
		</>
	);
};

export default LanguageItem;
