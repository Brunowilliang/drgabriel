'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

interface CarouselItem {
	id: number
	image: string
	title: string
	subtitle: string
	content: string
}

export default function Carousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: 'center',
		skipSnaps: false,
		containScroll: 'trimSnaps',
		dragFree: false,
		inViewThreshold: 0.5,
	})

	const [selectedIndex, setSelectedIndex] = useState(0)

	useEffect(() => {
		if (!emblaApi) return

		emblaApi.on('select', () => {
			setSelectedIndex(emblaApi.selectedScrollSnap())
		})
	}, [emblaApi])

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	const items: CarouselItem[] = [
		{
			id: 1,
			image: '/avatar/1.png',
			title: 'Dr. Rafael Lima',
			subtitle: 'Otorrinolaringologista',
			content:
				'O curso foi um divisor de águas. Hoje, aplico a otoplastia sem corte na minha clínica com total segurança e confiança.',
		},
		{
			id: 2,
			image: '/avatar/5.png',
			title: 'Dr. Felipe Torres',
			subtitle: 'Clínico Geral',
			content:
				'Nunca imaginei que uma técnica tão simples pudesse trazer tanto retorno. O suporte do grupo foi essencial para minha transição.',
		},
		{
			id: 3,
			image: '/avatar/2.png',
			title: 'Dr. Lucas Andrade',
			subtitle: 'Cirurgião Plástico',
			content:
				'A técnica ensinada no curso é transformadora. Consegui diversificar meus atendimentos e aumentar significativamente minha receita.',
		},
		{
			id: 4,
			image: '/avatar/3.png',
			title: 'Dra. Mariana Silva',
			subtitle: 'Pediatra',
			content:
				'A metodologia é incrível! Aprendi a atender pacientes de todas as idades com uma técnica minimamente invasiva.',
		},
		{
			id: 5,
			image: '/avatar/4.png',
			title: 'Dra. Camila Moura',
			subtitle: 'Dermatologista',
			content:
				'Adorei a abordagem prática e detalhada. Finalmente saí do ambiente hospitalar e estou focada em estética com excelentes resultados.',
		},
	]

	return (
		<div id='feedback' className='w-full max-w-[1300px] mx-auto py-44'>
			<div className='overflow-hidden' ref={emblaRef}>
				<div className='flex'>
					{items.map((item, index) => (
						<div key={item.id} className='min-w-[360px] pl-4 relative'>
							<div className='group relative transition-all duration-300'>
								<div
									className={`p-6 rounded-lg flex flex-col h-[360px] text-text-primary items-center justify-center shadow-md transition-all duration-300 ${
										index === selectedIndex
											? 'bg-[#F3CB74] border border-[#F3CB74]'
											: 'bg-background border border-text-secondary'
									}`}
								>
									<Image
										src={item.image}
										alt={item.title}
										width={70}
										height={70}
										className='rounded-full border border-text-primary aspect-square object-cover'
									/>
									<h3 className='font-bold mt-4'>{item.title}</h3>
									<h4 className=''>{item.subtitle}</h4>
									<p className='text-center relative mt-4'>
										<span>"</span>
										{item.content}
										<span>"</span>
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='flex justify-center gap-3 mt-6'>
				<button
					type='button'
					onClick={scrollPrev}
					className='rounded-full p-0 w-[50px] h-[50px] flex items-center justify-center'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='size-6'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z'
						/>
					</svg>
				</button>
				<button
					type='button'
					onClick={scrollNext}
					className='rounded-full p-0 w-[50px] h-[50px] flex items-center justify-center'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='currentColor'
						className='size-6'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}
