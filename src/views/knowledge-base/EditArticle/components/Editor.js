import React, { useState, useEffect, useRef } from 'react'
import { Input, Button, Spinner, Select } from 'components/ui'
import { writeInOpenAI } from './openAIMachine';
import { useParams } from 'react-router-dom';


const Editor = ({ }) => {
	const [text, setText] = useState("");
	const [vidData, setVidData] = useState({});


	const { id } = useParams()

	const [isLoading, setIsLoading] = useState(false);
	const inputRef = useRef(null);

	// const openAIhandler = async (e) => {
	// 	e.preventDefault();

	// }


	const channelOptions = [
		{ value: 'youtube', label: 'youtube' },
		{ value: 'facebook', label: 'facebook' },
		{ value: 'instagram', label: 'instagram' },
		{ value: 'tiktok', label: 'tiktok' }

	]
	const onStatusFilterChange = (selected) => {
		setVidData({ ...vidData, channel: selected.value })
	}

	const handleVidIdeaSubmit = async (e) => {
		e.preventDefault();

		let finalVidStr = vidData.shortDes + " for " + vidData.channel + " in detail";

		setIsLoading(true);
		if (finalVidStr) {
			const result = await writeInOpenAI({ prompt: finalVidStr });
			if (result.length) {
				setText(result);
			}
			console.log(result);
		}
		setIsLoading(false);
	}


	return (
		<div className='grid grid-cols-2 gap-4 md:grid-cols-1 sm:grid-cols-1 '>

			<div className='sm:mb-4'>
				{id === "30" ?
					<form onSubmit={handleVidIdeaSubmit} className='bg-neutral-100	rounded-md py-8 px-4 mb-2'>
						<div>
							<label className='font-bold text-base text-stone-600'>SHORT DESCRIPTIONS</label>
							<small className='text-gray-500 block mb-2'>recommend viral ideas for your video</small>
							<input
								onChange={(e) => setVidData({ ...vidData, shortDes: e.target.value })}
								type="text"
								name="shortDes"
								placeholder="e.g home workouts"
								class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
							/>
						</div>
						<div className='mt-8'>
							<label className='font-bold text-base text-stone-600'>CHANNEL</label>
							<small className='text-gray-500 block mb-2'>Facebook,Tiktok or youtube</small>

							<Select onChange={onStatusFilterChange} className="w-full block  outline-none " placeholder="Choose an option" options={channelOptions}></Select>
						</div>
						{isLoading ?
							<Button className=" mt-5 py-2 tracking-wide" size="sm" block variant="solid" >
								<Spinner className="mx-auto block" color="white" />
							</Button>
							:
							<Button type="submit" className=" mt-5 py-2 tracking-wide" size="sm" block variant="solid" >WRITE FOR ME</Button>}
						{/* onClick={openAIhandler} */}
					</form>
					:

					<div>
						<div className="mb-4">
							<Input rows="12" ref={inputRef} placeholder="write...." textArea />
						</div>
						{isLoading ? <Spinner /> : <Button className="block" variant="solid" >Submit</Button>}
					</div>
					// onClick={openAIhandler}
				}


			</div>
			<div className='h-80 overflow-y-auto border-2 p-2 border-gray-200 rounded-md'>
				{text ? text?.split("\n")?.map(el => <p className=' text-stone-600 leading-relaxed px-2 pb-2'>{el}</p>
				) : <span className='text-center block my-auto'>write somthing on the textbox....</span>
				}
			</div>
		</div>
	)
}

export default Editor