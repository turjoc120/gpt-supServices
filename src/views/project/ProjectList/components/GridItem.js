import React from 'react'
import { Card } from 'components/ui'
import ItemDropdown from './ItemDropdown'
import Members from './Members'
import ProgressionBar from './ProgressionBar'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { FcEditImage } from 'react-icons/fc'

const GridItem = ({ data }) => {

	const {
		name,
		totalTask,
		completedTask,
		progression,
		desc,
		member
	} = data

	return (
		<Link to={`/services/social-media/${data.id}`}>
			<Card className="h-full">
				<div className="flex justify-between align-center">
					<FcEditImage className=' text-2xl' />
					<div className="w-70">
						<h6>{name}</h6>
						<p className="mt-4">{desc}</p>
					</div>

				</div>
			</Card>
		</Link>
	)
}

export default GridItem
