const BlobAnimation = () => (
	<>
		<div className="lg:block hidden">
			<div
				className={`w-96 h-96 -mt-64 -ml-12 pointer-events-none absolute z-10`}
			>
				<img src={"/blobs/bloblight.svg"} alt="blob" />
			</div>
			<div
				className={`w-96 h-96 md:ml-128 lg:ml-162 xl:ml-180 mt-20 pointer-events-none absolute z-50`}
			>
				<img src={"/blobs/bloblight.svg"} alt="blob" />
			</div>
			<div
				className={`w-96 h-96 bottom-0 -mb-16 -ml-40 pointer-events-none absolute -z-50`}
			>
				<img src={"/blobs/bloblight.svg"} alt="blob" />
			</div>
		</div>
	</>
);

export default BlobAnimation;
