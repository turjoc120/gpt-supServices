import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import GridItem from './GridItem'
import ListItem from './ListItem'
import { Spinner } from 'components/ui'
import { getAllService, getbusiness, getList, getMarketing, getMmiscellaneous, getWriting, putProject } from '../store/dataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { miscellaneousData } from 'mock/data/projectData'

const ProjectListContent = () => {
	const { categoryIdx } = useParams();
	const [servicesData, setServicesData] = useState();
	const dispatch = useDispatch()

	const loading = useSelector((state) => state.projectList.data.loading)
	const projectList = useSelector((state) => state.projectList.data.projectList)
	const view = useSelector((state) => state.projectList.state.view)
	const { sort, search } = useSelector((state) => state.projectList.state.query)

	useEffect(() => {
		if (categoryIdx === "social-media") {
			dispatch(getList({ sort, search }))
		}
		if (categoryIdx === "miscellaneous") {
			dispatch(getMmiscellaneous({ sort, search }))
		}
		if (categoryIdx === "business") {
			dispatch(getbusiness({ sort, search }))
		}
		if (categoryIdx === "marketing-tools") {
			dispatch(getMarketing({ sort, search }))
		}
		if (categoryIdx === "writing-tools") {
			dispatch(getWriting({ sort, search }))
		}
		if (categoryIdx === "all-services") {
			dispatch(getAllService({ sort, search }))
		}


	}, [categoryIdx, dispatch, search])

	return (
		<div className={classNames('mt-6 h-full flex flex-col', loading && 'justify-center')}>
			{loading && (
				<div className="flex justify-center">
					<Spinner size={40} />
				</div>
			)
			}
			{
				(view === 'grid' && projectList.length > 0 && !loading) && (
					<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
						{
							projectList.map(project => (
								<GridItem key={project.id} data={project} categoryIdx={categoryIdx} />
							))
						}
					</div>
				)
			}
			{
				(view === 'list' && projectList.length > 0 && !loading) && (
					projectList.map(project => (
						<ListItem key={project.id} data={project} />
					))
				)
			}
		</div>
	)
}

export default ProjectListContent
