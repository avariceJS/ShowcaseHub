// Shared -> UI
import { Spotlight } from '@/shared/ui/Spotlight'
import { TextGenerateEffect } from '@/shared/ui/TextGenerateEffect'
import { Button } from '@/shared/ui/Button'


export const LandingPage = () => {
	return (
		<div className='pb-20 pt-36 h-[100vh]'>
			<div>
				<Spotlight className="left-80 top-44 h-[80vh] " fill="blue" />
				
				<Spotlight
					className='-top-40 -left-10 md:left-3 md:-top-11 h-screen'
					fill='gray'
				/>
				<Spotlight
					className='h-[80vh] top-10 left-full'
					fill='purple'
				/>
				<Spotlight
					className='h-[80vh] top-10 left-[55%]'
					fill='purple'
				/>

			</div>

			<div
				className='h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center'
			>
				<div
					className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
				/>
			</div>

			<div className='flex justify-center relative my-20 z-10'>
				<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
					<p className='uppercase tracking-widest text-xs text-center text-blue max-w-80'>
					Welcome to my portfolio site
					</p>
					<TextGenerateEffect
						words='Hello, I&apos;m Alex. I&apos;m a Full Stack developer'
						className='text-center text-[40px] md:text-5xl lg:text-6xl'
					/>

					<p className='text-center md:tracking-wider mb-7 mt-2 text-sm md:text-lg lg:text-2xl'>
					Explore my works and learn more about me
					</p>

					<a href='#about'>
						<Button variant='default'>my projects</Button>
					</a>
				</div>
			</div>
		</div>
	)
}
