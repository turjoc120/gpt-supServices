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

		let finalVidStr;
		// video ideas
		if (id === "30") {
			finalVidStr = "tell me 5 viral video ideas of " + vidData.shortDes + " on " + vidData.channel + " in a list";
		}
		// social media posts
		if (id === "31") {
			finalVidStr = "write few social media posts about " + vidData.shortDes;
		}
		// image captions
		if (id === "27") {
			finalVidStr = "write few " + vidData.tone + " image captions for " + vidData.shortDes;
		}
		// personal opinion 
		if (id === "28") {
			finalVidStr = `write down your 5 ${vidData?.tone ? vidData?.tone : ""} opinion about ${vidData.shortDes}`;
		}
		// video description
		if (id === "29") {
			finalVidStr = `write down 5 ${vidData?.tone ? vidData?.tone : ""} video description about ${vidData.shortDes}`;
		}
		// video titles
		if (id === "32") {
			finalVidStr = `write down 5 video titles about ${vidData.shortDes}`;
		}

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
		<div className='grid lg:grid-cols-2 xl:grid-cols-2 gap-4 md:grid-cols-1 sm:grid-cols-1 '>

			<div className='sm:mb-4'>

				{
					// get video ideas 
					id === "30" ?
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

						// social media posts
						id === "31" ?
							<form onSubmit={handleVidIdeaSubmit} className='bg-neutral-100	rounded-md py-8 px-4 mb-2 '>
								<div>
									<label className='font-bold text-base text-stone-600'>SHORT DESCRIPTIONS</label>
									<small className='text-gray-500 block mb-2'>what your social media page is about</small>
									<input
										onChange={(e) => setVidData({ ...vidData, shortDes: e.target.value })}
										type="text"
										name="shortDes"
										placeholder="e.g home workouts"
										class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
									/>
								</div>

								{isLoading ?
									<Button className=" mt-5 py-2 tracking-wide" size="sm" block variant="solid" >
										<Spinner className="mx-auto block" color="white" />
									</Button>
									:
									<Button type="submit" className=" mt-5 py-2 tracking-wide" size="sm" block variant="solid" >WRITE FOR ME</Button>}

							</form>
							:

							// captions for your image
							id === "27" ?
								<form onSubmit={handleVidIdeaSubmit} className='bg-neutral-100	rounded-md py-8 px-4 mb-2'>
									<div>
										<label className='font-bold text-base text-stone-600'>SHORT DESCRIPTIONS</label>
										<small className='text-gray-500 block mb-2'>what is the image about</small>
										<input
											onChange={(e) => setVidData({ ...vidData, shortDes: e.target.value })}
											type="text"
											name="shortDes"
											placeholder="e.g a picture of my self in front of eiffel tower"
											class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
										/>
									</div>
									<div className='mt-8'>
										<label className='font-bold text-base text-stone-600'>TONE</label>
										<small className='text-gray-500 block mb-2'>Tone of voice your want the AI to write it.</small>
										<input
											onChange={(e) => setVidData({ ...vidData, tone: e.target.value })}
											type="text"
											name="tone"
											placeholder="e.g excited"
											class="w-60 block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
										/>
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

								// Personal Opinion
								id === "28" ?
									<form onSubmit={handleVidIdeaSubmit} className='bg-neutral-100	rounded-md py-8 px-4 mb-2'>
										<div>
											<label className='font-bold text-base text-stone-600'>SHORT DESCRIPTIONS</label>
											<small className='text-gray-500 block mb-2'>what you want my opinion on</small>
											<input
												onChange={(e) => setVidData({ ...vidData, shortDes: e.target.value })}
												type="text"
												name="shortDes"
												placeholder="e.g climate change"
												class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
											/>
										</div>
										<div className='mt-8'>
											<label className='font-bold text-base text-stone-600'>TONE</label>
											<small className='text-gray-500 block mb-2'>Tone of voice your want the AI to write in. </small>
											<input
												onChange={(e) => setVidData({ ...vidData, tone: e.target.value })}
												type="text"
												name="tone"
												placeholder="e.g excited"
												class="w-60 block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
											/>
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


									// video descriptions
									id === "29" ?
										<form onSubmit={handleVidIdeaSubmit} className='bg-neutral-100	rounded-md py-8 px-4 mb-2'>
											<div>
												<label className='font-bold text-base text-stone-600'>SHORT DESCRIPTIONS</label>
												<small className='text-gray-500 block mb-2'>what your video is about</small>
												<input
													onChange={(e) => setVidData({ ...vidData, shortDes: e.target.value })}
													type="text"
													name="shortDes"
													placeholder="e.g how to start weight lifting"
													class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
												/>
											</div>
											<div className='mt-8'>
												<label className='font-bold text-base text-stone-600'>TONE</label>
												<small className='text-gray-500 block mb-2'>Tone of voice your want the AI to write in. </small>
												<input
													onChange={(e) => setVidData({ ...vidData, tone: e.target.value })}
													type="text"
													name="tone"
													placeholder="e.g excited"
													class="w-60 block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
												/>
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

										// video titles 
										id === "32" ?
											<form onSubmit={handleVidIdeaSubmit} className='bg-neutral-100	rounded-md py-8 px-4 mb-2'>
												<div>
													<label className='font-bold text-base text-stone-600'>SHORT DESCRIPTIONS</label>
													<small className='text-gray-500 block mb-2'>what your video is about</small>
													<input
														onChange={(e) => setVidData({ ...vidData, shortDes: e.target.value })}
														type="text"
														name="shortDes"
														placeholder="e.g how to start weight lifting"
														class="w-full block px-3 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-600 bg-transparent"
													/>
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

											// other 
											<div>
												<div className="mb-4">
													<Input rows="12" ref={inputRef} placeholder="write...." textArea />
												</div>
												{isLoading ? <Spinner /> : <Button className="block" variant="solid" >Submit</Button>}
											</div>
				}


			</div>
			<div className='h-80 overflow-y-auto border-2 p-2 border-gray-200 rounded-md'>
				{text ? text?.split("\n")?.map((el, i) => <p key={i} className=' text-stone-600 leading-relaxed px-2 pb-2'>{el}</p>
				) : <h3 className='flex h-full font-black'><span className='m-auto'>Ans Box...</span></h3>

				}
			</div>
		</div>
	)
}

export default Editor