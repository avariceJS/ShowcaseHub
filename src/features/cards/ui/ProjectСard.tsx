import { projects } from '@/entities/projects'
import { CardBody, CardContainer, CardItem } from '@/shared/ui/3dCard'
import Image from 'next/image'
import Link from 'next/link'

export const ProjectСard = () => {
	return (
		<div>
			{projects.map(projects => (
				<CardContainer className='inter-var' key={projects.id}>
					<CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-white'
						>
							{projects.title}
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							{projects.description}
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src={projects.image}
								height='500'
								width='500'
								className='h-60 w-full rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<div className='flex justify-between items-center mt-20'>
							<CardItem
								translateZ={20}
								as={Link}
								href='https://twitter.com/mannupaaji'
								target='__blank'
								className='flex px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
							>
								{projects.iconLists.map((icon, index) => (
									<Image
										className='mr-1 border border-slate-500 p-1 rounded-xl'
										key={index}
										src={icon}
										height='30'
										width='30'
										alt={`icon-${index}`}
									/>
								))}
							</CardItem>
							<CardItem
								translateZ={20}
								as='button'
								className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
							>
								Sign up
							</CardItem>
						</div>
					</CardBody>
				</CardContainer>
			))}
		</div>
	)
}
