import { ProjectsPage } from '@/widgets/ProjectsPage'
import { LandingPage } from '@/widgets/LandingPage'
import React from 'react'

const Home = () => {
	return (
		<main className='flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 relative bg-black '>
			<LandingPage />
			<ProjectsPage />
		</main>
	)
}

export default Home
