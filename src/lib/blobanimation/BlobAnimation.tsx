import Image from "next/image";

const BlobAnimation = () => (
	<>
		<span className="lg:block hidden">
			<span
				className={`w-96 h-96 -mt-64 -ml-12 pointer-events-none absolute z-10`}
			>
				<BlobImage />
			</span>
			<span
				className={`w-96 h-96 md:ml-128 lg:ml-162 xl:ml-[60rem] 2xl:ml-180 mt-20 pointer-events-none absolute z-40`}
			>
				<BlobImage />
			</span>
			<span
				className={`w-96 h-96 bottom-0 -mb-16 -ml-40 pointer-events-none absolute -z-50`}
			>
				<BlobImage />
			</span>
		</span>
	</>
);

export default BlobAnimation;


export const BlobImage = () => {
	return (
		<>
			<Image src={"/blobs/bloblight.svg"} alt="blob" width={500} height={500} />
		</>
	)
}