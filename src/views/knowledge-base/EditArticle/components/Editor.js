import React, { useState, useEffect, useRef } from 'react'
import { Input, Button, Spinner } from 'components/ui'
import { writeInOpenAI } from './openAIMachine';


const Editor = ({ mode }) => {
	const [text, setText] = useState("");


	const [isLoading, setIsLoading] = useState(false);
	const inputRef = useRef(null);

	const openAIhandler = async () => {
		setIsLoading(true);
		if (inputRef.current?.value) {
			console.log(inputRef.current.value);
			const result = await writeInOpenAI({ prompt: inputRef.current.value });
			if (result.length) {
				setText(result);
			}
			console.log(result);
		}
		setIsLoading(false);
	}

	return (
		<div className='grid grid-cols-2 gap-4'>
			<div>

				<div className="mb-4">
					<Input rows="12" ref={inputRef} placeholder="write...." textArea />
				</div>
				{isLoading ? <Spinner /> : <Button variant="solid" onClick={openAIhandler}>Submit</Button>}
			</div>
			<div className='h-80 border-2 p-2 border-gray-300 rounded-md	'>
				{text ? text?.split("\n")?.map(el => <p>{el}</p>
				) : <span>write somthing on the textbox....</span>
				}
			</div>
		</div>
	)
}

export default Editor