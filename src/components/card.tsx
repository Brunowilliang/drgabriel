import Image from "next/image";
import React from "react";

type Props = {
	title: string;
	description: string;
	image: string;
};

export default function Card({ title, description, image }: Props) {
	return (
		<div className="flex rounded-2xl w-full overflow-hidden border-text-primary border-[3px] min-h-[80px]">
			<div className="flex w-[70px] min-w-[70px] justify-center items-center bg-text-primary p-2 h-full">
				<Image
					className="h-[46px] w-[46px] object-contain"
					src={image}
					alt={title}
					width={46}
					height={46}
				/>
			</div>
			<div className="flex items-center w-full p-3 bg-text-primary/20">
				<p className="text-[1.10em] leading-5 tracking-tight text-text-secondary">
					<strong>{title}: </strong>
					{description}
				</p>
			</div>
		</div>
	);
}
