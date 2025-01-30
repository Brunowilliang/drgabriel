type Props = {
	number: number
	title: string
	description: string
}

export default function Card2({ number, title, description }: Props) {
	return (
		<div className='flex flex-row items-center justify-start lg:justify-center  gap-3 w-full lg:w-[350px]'>
			<div className='h-[60px] w-[60px] min-h-[60px] min-w-[60px] bg-text-primary/20 text-text-primary font-bold border-[2px] border-text-primary outline-0 rounded-lg flex items-center justify-center'>
				<p className='text-[2.4em] leading-none'>{number}</p>
			</div>
			<div>
				<p className='text-[1.2em] font-bold text-text-primary'>{title}</p>
				<p className='text-[1.1em]'>{description}</p>
			</div>
		</div>
	)
}
