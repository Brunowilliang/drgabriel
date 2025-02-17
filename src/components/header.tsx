'use client'
import { MenuPaths } from '@/utils/menu'
import Image from 'next/image'
import { useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import Link from 'next/link'
export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header
			className={`w-full fixed top-0 left-0 right-0 z-200 px-5 bg-background/80 backdrop-blur-md lg:bg-background lg:shadow-2xl ${
				isMenuOpen ? 'h-screen' : 'h-[100px]'
			} lg:h-[100px]`}
		>
			<nav className='h-full lg:h-[100px] max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-4 items-center justify-start'>
				<div className='flex w-full lg:w-fit flex-row items-center justify-between lg:justify-start pt-5 lg:pt-0'>
					<Link href={MenuPaths[0].href}>
						<Image
							src='/icon.svg'
							alt='logo'
							width={60}
							height={60}
							priority
							className='mr-0 lg:mr-5'
						/>
					</Link>
					<button
						type='button'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className='lg:hidden text-2xl bg-transparent p-4'
					>
						{isMenuOpen ? <X /> : <AlignJustify />}
					</button>
				</div>

				<div
					className={`${
						isMenuOpen ? 'flex' : 'hidden'
					} w-full lg:flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-4`}
				>
					{MenuPaths.map(path => (
						<Link
							key={path.label}
							href={path.href}
							className='link text-xl lg:text-base'
						>
							{path.label}
						</Link>
					))}
				</div>
			</nav>
		</header>
	)
}
