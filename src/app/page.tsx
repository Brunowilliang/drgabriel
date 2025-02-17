import Card from '@/components/card'
import Card2 from '@/components/card2'
import Image from 'next/image'
import Carousel from '@/components/carousel'
import { Accordion } from '@/components/accordion'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ArrowDownIcon } from '@/components/ArrowDownIcon'
import Link from 'next/link'
import { links } from '@/utils/links'

export default function Home() {
	return (
		<>
			<Header />
			<section
				id='inicio'
				className='lg:h-screen mx-auto flex items-center justify-center relative overflow-hidden'
			>
				{/* web */}
				<Image
					src='/image_8.png'
					alt='Background Left'
					fill
					className='object-contain w-full h-full ml-[350px] hidden lg:block lg:z-0'
					priority
				/>
				<div className='grid grid-cols-1 lg:grid-cols-7 max-w-[1300px] lg:h-[1200px] w-full gap-0 lg:gap-8 relative mt-[150px]'>
					{/* mobile */}
					<Image
						src='/image_8.png'
						className='w-full h-full object-contain lg:hidden scale-125'
						width={2000}
						height={2000}
						priority
						alt='Como vamos te ajudar nessa jornada'
					/>

					<div className='flex flex-col lg:col-span-3 justify-center items-start gap-7 z-10 px-[1.5em]'>
						<h1 className='font-bold'>Curso de Otoplastia Sem Corte</h1>
						<p className='text-text-secondary text-[1.1em]'>
							Domine a habilidade de otoplastia e saia dos plantões para faturar
							6 dígitos por ano.
							<br />
							<br />
							Transforme sua carreira e explore novas oportunidades com o nosso
							curso de otoplastia sem corte. Aprenda técnicas revolucionárias
							para um mercado lucrativo e de baixo custo.
						</p>
						<Link href={links.planos} type='button' className='button'>
							Inscreva-se Agora
						</Link>
					</div>
					<Link
						href='#section-2'
						className='link z-50 lg:absolute lg:bottom-20 lg:left-0 flex items-center px-[1.5em] pt-[3em] pb-[7em] lg:px-- gap-2 text-text-secondary'
					>
						<ArrowDownIcon />
						Saiba mais
					</Link>
				</div>
			</section>

			<div className='w-full h-[4px] bg-text-primary -mt-[4px] z-10' />

			{/* section 2 */}
			<section
				id='section-2'
				className='max-w-[1300px] mx-auto flex items-center justify-center'
			>
				<div className='grid grid-cols-1 lg:grid-cols-7 h-full w-full gap-0 lg:gap-8 relative'>
					<Image
						src='/image_2.png'
						alt='Background Left'
						fill
						className='object-cover absolute top-0 -ml-60 w-full h-full z-0 hidden lg:block'
						priority
					/>
					<div className='flex justify-center h-[500px] lg:h-[600px] lg:col-span-4 items-center order-2 lg:order-1 '>
						<Image
							src='/image_2.png'
							className='w-full h-full object-cover lg:hidden'
							width={2000}
							height={2000}
							quality={100}
							alt='Como vamos te ajudar nessa jornada'
						/>
					</div>
					<div className='flex flex-col lg:col-span-3 justify-center items-start gap-7 order-1 lg:order-2 z-10 px-[1.5em] lg:px-0 pt-[5em] lg:py-[10em]'>
						<Card
							title='Mentalidade'
							description='Desenvolva a mentalidade certa para transicionar de plantões hospitalares para o mercado estético.'
							image='/icons/section_2_icon_1.png'
						/>
						<Card
							title='Aprendizado'
							description='Aprofunde seus conhecimentos em uma técnica inovadora e segura.'
							image='/icons/section_2_icon_2.png'
						/>
						<Card
							title='Empreendedorismo Medicinal'
							description='Abra portas para novas oportunidades com uma abordagem de negócios em estética.'
							image='/icons/section_2_icon_3.png'
						/>
						<Card
							title='Prática e Aperfeiçoamento'
							description='Domine as técnicas e métodos com aulas práticas.'
							image='/icons/section_2_icon_4.png'
						/>
					</div>
				</div>
			</section>

			{/* section 3 */}
			<section
				id='aulas'
				className='flex flex-col gap-12 justify-center items-center min-h-screen w-full mx-auto px-[1.5em] lg:px-0 py-[5em] lg:py-0 relative'
			>
				<Image
					src='/image_7_left.png'
					alt='Background Left'
					width={223}
					height={734}
					className='object-cover absolute left-0 w-auto h-full hidden lg:block'
					priority
				/>
				<Image
					src='/image_7_right.png'
					alt='Background Right'
					width={437}
					height={734}
					className='object-cover absolute right-0 w-auto h-full hidden lg:block'
					priority
				/>
				<div className='flex flex-col gap-12 justify-center items-center min-h-screen max-w-[1200px] w-full'>
					<div className='flex flex-col gap-2 items-center'>
						<h1>O que você terá acesso no curso</h1>
						<p>
							Aqui você verá um breve descrição de cada módulo que será
							ministrado
						</p>
					</div>
					<div className='flex flex-wrap items-center justify-center gap-x-10 gap-y-10'>
						<Card2
							number={1}
							title='Introdução'
							description='Visão Geral e o que é a otoplastia.'
						/>
						<Card2
							number={2}
							title='Aspectos Teóricos'
							description='Entenda as bases da otoplastia, anatomia e técnicas.'
						/>
						<Card2
							number={3}
							title='Preparação'
							description='O que os pacientes precisam saber antes do procedimento.'
						/>
						<Card2
							number={4}
							title='Cuidados Pós-Procedimento'
							description='Como garantir uma recuperação eficaz.'
						/>
						<Card2
							number={5}
							title='Complicações'
							description='Como lidar com possíveis complicações.'
						/>
						<Card2
							number={6}
							title='Primeiros Passos'
							description='Materiais e iniciação do procedimento.'
						/>
						<Card2
							number={7}
							title='Primeiro Paciente'
							description='Primeiro Pacientes realizado na prática de forma explicativa.'
						/>
						<Card2
							number={8}
							title='Segundo Paciente'
							description='Segunda Pacientes realizado na prática de forma explicativa.'
						/>
						<Card2
							number={9}
							title='Terceiro Paciente'
							description='Segunda Pacientes realizado na prática de forma explicativa.'
						/>
						<Card2
							number={10}
							title='Retorno e Análise'
							description='Avaliação dos resultados dos pacientes após 15 dias.'
						/>
						<Card2
							number={11}
							title='Acervo de Conteúdos'
							description='Acesso a artigos, Contratos, Termos para paciente e Suporte.'
						/>
					</div>
					<Link href={links.planos} type='button' className='button mt-7'>
						Garanta a sua vaga agora
					</Link>
				</div>
			</section>

			{/* section 4 */}
			<section
				id='about-me'
				className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-[1300px] w-full gap-8 lg:gap-0 mx-auto px-[1.5em] lg:px-0 py-[5em] lg:py-0'
			>
				<div className='flex flex-1 flex-col z-10 justify-center items-start'>
					<div className='flex flex-col items-start gap-7 lg:p-12'>
						<h1 className='font-bold'>Quem sou eu?</h1>
						<p className='text-text-secondary text-[1.1em]'>
							Prazer, sou Gabriel Ragassi, médico com ampla experiência na área
							de Medicina Estética. Minha trajetória profissional inclui a honra
							de servir como Tenente Médico no Exército Brasileiro, uma vivência
							que me proporcionou disciplina e compromisso, valores fundamentais
							na minha atuação. Atualmente, lidero o Instituto GR, uma
							referência em procedimentos estéticos, dedicado a oferecer
							tratamentos personalizados e resultados de excelência.
						</p>
					</div>
				</div>
				<div className='flex-1 flex justify-center items-center [box-shadow:var(--box-shadow-primary)]'>
					<Image
						src='/image_4.png'
						className='w-full h-auto p-[2px]'
						width={800}
						height={800}
						alt='Quem sou eu'
					/>
				</div>
			</section>

			{/* section 5 */}
			<section className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-[1300px] w-full gap-8 lg:gap-0 mx-auto px-[1.5em] lg:px-0 py-[5em] lg:py-0'>
				<div className='flex-1 flex justify-center items-center [box-shadow:var(--box-shadow-primary)]'>
					<Image
						src='/image_5.png'
						className='w-full h-auto p-[2px]'
						width={800}
						height={800}
						alt='Formação'
					/>
				</div>
				<div className='flex flex-1 flex-col z-10 justify-center items-start'>
					<div className='flex flex-col items-start gap-7 lg:p-12'>
						<h1 className='font-bold'>Formação</h1>
						<p className='text-text-secondary text-[1.1em]'>
							Sou formado pela Faculdade de Medicina de Presidente Prudente
							(UNOESTE). Sou membro ativo da ABME (Associação Brasileira de
							Medicina Estética) e possuo formações avançadas em mini
							lipoaspiração, bioplastia de glúteos, harmonização orofacial e
							otoplastia fechada, áreas que consolidam minha expertise no
							segmento.
						</p>
					</div>
				</div>
			</section>

			{/* section 6 */}
			<section
				id='curso'
				className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-[1300px] w-full gap-8 lg:gap-0 mx-auto px-[1.5em] lg:px-0 py-[5em] lg:py-0'
			>
				<div className='flex flex-1 flex-col z-10 justify-center items-start order-2 lg:order-1'>
					<div className='flex flex-col items-start gap-7 lg:p-12'>
						<h1 className='font-bold'>Para quem é esse curso?</h1>
						<p className='text-text-secondary text-[1.1em]'>
							Médicos que desejam sair do ambiente hospitalar e explorar o
							mercado de estética, buscando uma alternativa de renda com alta
							rentabilidade, podem se beneficiar ao aprender uma técnica de
							otoplastia sem corte e com baixo custo de material, abrindo novas
							oportunidades na carreira e ampliando suas habilidades
							profissionais.
						</p>
						<Link href={links.planos} type='button' className='button'>
							Quero fazer parte
						</Link>
					</div>
				</div>
				<div className='flex-1 flex justify-center items-center order-1 lg:order-2'>
					<Image
						src='/image_6.png'
						className='w-full h-auto p-[2px]'
						width={800}
						height={800}
						alt='Para quem é esse curso'
					/>
				</div>
			</section>

			<Carousel />

			{/* section 8 */}
			<section
				id='planos'
				className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-[1300px] w-full gap-8 lg:gap-0 mx-auto px-[1.5em] lg:px-0 py-[5em] lg:py-44'
			>
				<div className='flex flex-1 flex-col z-10 justify-center items-center lg:items-start lg:pb-16'>
					<h1 className='font-bold'>Investimento</h1>
					<p className='text-text-secondary text-[1.1em]'>
						Escolha seu plano e inscreva-se agora
					</p>
				</div>

				<div className='flex-1 flex flex-col lg:flex-row gap-4 justify-end items-start'>
					<div className='flex flex-col items-center justify-center gap-2 w-full lg:max-w-[270px]'>
						<div className='flex flex-col text-center items-center justify-center gap-6 py-11 px-7 border border-text-secondary rounded-lg text-text-secondary w-full'>
							<h2 className='font-bold text-1xl'>Plano Online</h2>
							<p className='text-4xl text-text-primary'>$ 2.997</p>
							<div className='w-[50px] h-[5px] rounded-full bg-text-secondary' />
							<p>Acesso Vitalício</p>
							<p>Suporte Via WhatsApp</p>
							<p>Ebook de acompanhamento</p>
							<p>Comunidade da Otoplastia</p>
						</div>
						<Link
							href={links.cursoPlanoOnline}
							type='button'
							className='button'
							target='_blank'
						>
							Comprar
						</Link>
					</div>

					<div className='flex flex-col items-center justify-center gap-2 w-full lg:max-w-[270px]'>
						<div className='flex flex-col text-center items-center justify-center gap-6 py-11 px-7 border border-text-secondary rounded-lg text-text-secondary w-full'>
							<h2 className='font-bold text-1xl'>Plano Online e Presencial</h2>
							<p className='text-4xl text-text-primary'>$ 2.997</p>
							<div className='w-[50px] h-[5px] rounded-full bg-text-secondary' />
							<p>Acesso Vitalício</p>
							<p>Suporte Via WhatsApp</p>
							<p>Ebook de acompanhamento</p>
							<p>Comunidade da Otoplastia</p>
							<p>Materiais</p>
							<p>Realizar o curso totalmente presencial na prática.</p>
						</div>
						<Link
							href={links.cursoPresencial}
							type='button'
							className='button'
							target='_blank'
						>
							Comprar
						</Link>
					</div>
				</div>
			</section>

			{/* section 9 */}
			<section
				id='duvidas'
				className='max-w-[1300px] mx-auto flex flex-col px-[1.5em] lg:px-0 gap-8 items-start- justify-start'
			>
				<h1 className='font-bold'>Dúvidas</h1>
				<Accordion />
			</section>

			{/* Footer */}
			<Footer />
		</>
	)
}
