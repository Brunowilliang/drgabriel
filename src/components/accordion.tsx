'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface AccordionProps {
	className?: string
}

const items = [
	{
		title: 'O curso é indicado para qualquer médico?',
		content: 'Qualquer médico pode se inscrever e participar.',
	},
	{
		title: 'Qual a carga horária do curso?',
		content: 'Para finalizar o curso leva em media 4h de conteúdo.',
	},
	{
		title: 'Qual a diferença entre o plano online e o presencial?',
		content:
			'No plano presencial, você terá a oportunidade de praticar em pacientes modelos reais e esclarecer suas dúvidas diretamente comigo, garantindo uma experiência mais imersiva e interativa.',
	},
	{
		title: 'Os materiais utilizados são inclusos no valor do curso?',
		content:
			'Sim, todos os materiais necessários para a prática estão incluídos no valor do curso, sem custos adicionais.',
	},
	{
		title: 'Existe suporte técnico após a conclusão do curso?',
		content:
			'Sim! Você terá acesso ao nosso grupo exclusivo no WhatsApp, onde poderá tirar dúvidas e receber suporte contínuo mesmo após a conclusão do curso.',
	},
]

export function Accordion({ className = '' }: AccordionProps) {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

	const toggleItem = (index: number) => {
		setExpandedIndex(expandedIndex === index ? null : index)
	}

	return (
		<div className={`w-full ${className}`}>
			{items.map((item, index) => (
				<div key={index} className='overflow-hidden pb-5'>
					<a onClick={() => toggleItem(index)} className='accordion'>
						<h3 className='text-lg lg:text-2xl font-medium text-text-secondary'>
							{item.title}
						</h3>
						<motion.div
							animate={{ rotate: expandedIndex === index ? 180 : 0 }}
							transition={{ duration: 0.2 }}
						>
							<ChevronDown className='w-7 h-7 text-text-secondary' />
						</motion.div>
					</a>

					<AnimatePresence>
						{expandedIndex === index && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: 'auto', opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.2 }}
								className='overflow-hidden'
							>
								<div className='px-0 pt-4 pb-7 text-lg text-text-secondary'>
									{item.content}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	)
}
