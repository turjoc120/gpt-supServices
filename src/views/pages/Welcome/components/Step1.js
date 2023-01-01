import React from 'react'
import { DoubleSidedImage } from 'components/shared'
import { Button } from 'components/ui'

const Step1 = ({ onNext, onSkip }) => {
	return (
		<div className="text-center">
			<DoubleSidedImage
				className="mx-auto mb-8"
				src="/img/others/welcome.png"
				darkModeSrc="/img/others/welcome-dark.png"
				alt="Welcome"
			/>
			<h3 className="mb-2">Welcome on Board!</h3>
			<p className="text-base">thanks for trusting us! </p>
			{/* <div className="mt-8 max-w-[350px] mx-auto">
				<Button 
					className="mb-2" 
					variant="solid"
					onClick={onNext}
					block
				>
					Get started</Button>
				<Button 
					variant="plain" 
					onClick={onSkip} 
					block
				>
					Skip now
				</Button>
			</div> */}
		</div>
	)
}

export default Step1