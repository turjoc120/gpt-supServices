import React, { useEffect, useState } from 'react'
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

	const [headingText, setHedingText] = useState("");
	const { id } = useParams();

	useEffect(() => {
		if (id === "30") {
			setHedingText("Video Ideas")
		}
		if (id === "31") {
			setHedingText("Social Media Post Ideas")
		}
		if (id === "27") {
			setHedingText("Image Captions")
		}
		if (id === "28") {
			setHedingText("Personal Opinion")
		}
		if (id === "29") {
			setHedingText("Video Descriptions")
		}
		if (id === "32") {
			setHedingText("Video Titles")
		}
		if (id === "cover-latter") {
			setHedingText("Cover Latter")
		}
		if (id === "fictional-story") {
			setHedingText("Fictional Story Ideas")
		}
		if (id === "food-recipe") {
			setHedingText("Food Recipes")
		}
		if (id === "quora-answers") {
			setHedingText("Quora Answers")
		}
		if (id === "greetings") {
			setHedingText("Greetings")
		}
		if (id === "song-lyrics") {
			setHedingText("Song Lyrics")
		}
		if (id === "pd-reviews") {
			setHedingText("Product Reviews")
		}
		if (id === "linkedin-bio") {
			setHedingText("Personal Linkedin Bio")
		}
		if (id === "job-description") {
			setHedingText("Job Description")
		}
		if (id === "poems") {
			setHedingText("Poems")
		}
	}, [id])


	return (
		<Container>
			<AdaptableCard>
				<div className="max-w-[800px] mx-auto">
					<div className="flex justify-between items-center mb-4">
						<h3> < span className='font-black text-2xl text-stone-900'>{headingText}</span></h3>
					</div>
					<Editor />
				</div>
			</AdaptableCard>
		</Container >
	)
}

export default EditArticle