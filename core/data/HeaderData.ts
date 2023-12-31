export type HeaderDataType = {
	title: string;
	link: string;
	target: string;
};

const HeaderData: HeaderDataType[] = [
	{
		title: "Works",
		link: "works",
		target: "_self",
	},
	{
		title: "Contact",
		link: "contact",
		target: "_self",
	},
	{
		title: "Resume",
		link: "resume",
		target: "_blank",
	},
];

export default HeaderData;
