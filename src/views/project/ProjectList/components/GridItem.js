import React from 'react'
import { Card } from 'components/ui'
import ItemDropdown from './ItemDropdown'
import Members from './Members'
import ProgressionBar from './ProgressionBar'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { Link } from 'react-router-dom'

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
			<Card bodyClass="h-full">
				<div className="flex flex-col justify-between h-full">
					<div className="flex justify-between">
						<h6>{name}</h6>
					</div>
					<p className="mt-4">{desc}</p>
				</div>
			</Card>
		</Link>
	)
}

export default GridItem
