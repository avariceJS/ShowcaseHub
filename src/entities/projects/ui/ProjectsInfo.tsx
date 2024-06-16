import pudge from '@/public/image/pudge.jpg'
import ts from '@/public/icons/ts.png'
import react from '@/public/icons/react.png'
import tailwindcss from '@/public/icons/tailwindcss.png'

export const projects = [
	{
		id: 1,
		title: 'Title',
		description:
			'Description',
		image: pudge,
		iconLists: [ts],
		link: 'github',
	},
	{
		id: 2,
		title: 'Title',
		description:
			'Description',
		image: pudge,
		iconLists: [ts,tailwindcss,react],
		link: 'github',
	},
	
]
