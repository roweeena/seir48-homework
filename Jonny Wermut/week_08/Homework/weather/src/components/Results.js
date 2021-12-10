import React from 'react'

const Results = (props) => {
	return (
		<div>
		<img src={`https://${props.icon}`} />
		<p> The weather in {`${props.location}`} is {`${props.temp}`} degrees and {`${props.description}`} </p>
		<p> It feels like {`${props.feelsLike}`} degrees with winds up to {`${props.wind}`} km/hr </p>
		</div>
		)
}

export default Results;