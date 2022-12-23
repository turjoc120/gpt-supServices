import React, { useEffect } from 'react'
import { Container, AdaptableCard } from 'components/shared'
import { Button } from 'components/ui'
import Editor from './components/Editor'
import useQuery from 'utils/hooks/useQuery'
import reducer from './store'
import { injectReducer } from 'store/index'
import { getArticle, setArticle } from './store/dataSlice'
import { setCategory, setMode } from './store/stateSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

injectReducer('knowledgeBaseEditArticle', reducer)

const EditArticle = () => {

	// const dispatch = useDispatch()

	// const mode = useSelector((state) => state.knowledgeBaseEditArticle.state.mode)

	// const query = useQuery()

	// const id = query.get('id')

	// useEffect(() => {
	// 	fetchData()
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])
	const { id } = useParams()

	// const fetchData = () => {
	// 	const categoryLabel = query.get('categoryLabel')
	// 	const categoryValue = query.get('categoryValue')

	// 	if (id) {
	// 		dispatch(getArticle({ id }))
	// 	}

	// 	if (!id) {
	// 		dispatch(setMode('add'))
	// 		dispatch(setArticle(''))
	// 	}

	// 	if (categoryLabel && categoryValue) {
	// 		dispatch(setCategory({ categoryLabel, categoryValue }))
	// 	}

	// }

	// const onModeChange = (mode) => {
	// 	dispatch(setMode(mode))
	// }

	return (
		<Container>
			<AdaptableCard>
				<div className="max-w-[800px] mx-auto">
					<div className="flex justify-between items-center mb-4">
						<h3>

							{id === "30" ? < span className='font-black	text-2xl text-stone-900'> Video Ideas</span> :

								id === "31" ? < span className='font-black text-2xl text-stone-900'> Social Media Post Ideas</span> :

									id === "27" ? < span className='font-black text-2xl text-stone-900'> Image Captions</span> :

										id === "28" ? < span className='font-black text-2xl text-stone-900'> Personal Opinion</span> :

											id === "29" ? < span className='font-black text-2xl text-stone-900'> Video Descriptions</span> :

												id === "32" ? < span className='font-black text-2xl text-stone-900'> Video Titles</span> :
													id === "cover-latter" ? < span className='font-black text-2xl text-stone-900'>Cover Latter</span> :
														id === "fictional-story" ? < span className='font-black text-2xl text-stone-900'>Fictional Story Ideas</span> :
															id === "food-recipe" ? < span className='font-black text-2xl text-stone-900'>Food Recipes</span> :
																id === "quora-answers" ? < span className='font-black text-2xl text-stone-900'>Quora Answers</span> :
																	id === "greetings" ? < span className='font-black text-2xl text-stone-900'>Greetings</span> :
																		id === "song-lyrics" ? < span className='font-black text-2xl text-stone-900'>Song Lyrics</span> :
																			id === "job-description" ? < span className='font-black text-2xl text-stone-900'>Job Description</span> :
																				id === "pd-reviews" ? < span className='font-black text-2xl text-stone-900'>Product Reviews</span> :
																					id === "linkedin-bio" ? < span className='font-black text-2xl text-stone-900'>Personal Linkedin Bio</span> :
																						id === "poems" ? < span className='font-black text-2xl text-stone-900'>Poems</span> :

																							""}

						</h3>


					</div>
					<Editor />
				</div>
			</AdaptableCard>
		</Container >
	)
}

export default EditArticle