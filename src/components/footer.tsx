import { MenuPaths } from '@/utils/menu'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export function Footer() {
	return (
		<footer className='max-w-[1300px] mx-auto'>
			<div className='flex gap-4 w-full justify-center lg:justify-end'>
				<Instagram className='text-text-secondary' />
				<Twitter className='text-text-secondary' />
				<Facebook className='text-text-secondary' />
			</div>
			<div className='flex flex-col lg:flex-row px-[1.5em] lg:px-0 gap-8 pt-10 pb-4 items-start- justify-between'>
				<div className='text-text-secondary text-center lg:text-left order-last lg:order-first'>
					<p>Copyright © GRINSTITUTO TODOS OS DIREITOS RESERVADOS</p>
				</div>
				<div className='flex flex-wrap align-middle justify-center lg:flex-row gap-4'>
					{MenuPaths.map(path => (
						<a
							key={path.label}
							href={path.href}
							className='link text-center lg:text-left'
						>
							{path.label}
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}
