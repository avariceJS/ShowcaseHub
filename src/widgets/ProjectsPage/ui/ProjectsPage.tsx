import { ProjectСard } from '@/features/cards'
import ModelViewer from '@/features/dog'
import VoxelDog from '@/features/dog'
import React from 'react'

export const ProjectsPage = () => {
	return (
		<div className='relative '>
			<h1 className='text-purple-400 text-3xl flex justify-center'>
				A selection of my projects
			</h1>
			<h1>3D Model Viewer</h1>
			<ModelViewer />
		</div>
	)
}
