import React, { useState } from 'react'
import {
	ComposableMap,
	Geographies,
	Geography
} from 'react-simple-maps'

import ReactTooltip from 'react-tooltip'

const geoUrl = '/data/features.json'

const MapChart = ({ setTooltipContent }) => {
	return (
		<ComposableMap data-tip="" height={200} projectionConfig={{ scale: 80 }}>
			<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map(geo => (
							<Geography
								key={geo.rsmKey}
								geography={geo}
								onMouseEnter={() => {
									setTooltipContent(`${geo.properties.name}`);
								}}
								onMouseLeave={() => {
									setTooltipContent('')
								}}
								style={{
									default: {
										fill: "#D6D6DA",
										outline: "none"
									},
									hover: {
										fill: "#F53",
										outline: "none"
									},
									pressed: {
										fill: "#E42",
										outline: "none"
									}
								}}
							/>
						))
					}
				</Geographies>
		</ComposableMap>
	)
}

function Map() {
	const [content, setContent] = useState('')
	return (
		<div>
			<MapChart setTooltipContent={setContent} />
			<ReactTooltip>{content}</ReactTooltip>
		</div>
	)
}

function MapChartWithTooltip() {
	return (
		<Map />
	)
}

export default MapChartWithTooltip