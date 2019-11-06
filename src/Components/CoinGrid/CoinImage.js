import React from "react"

const CoinImage = ({image, symbol, customStyling}) => {
	console.log(image)
	return (
		<img src={`http://cryptocompare.com/${image}`} alt={symbol} style={customStyling || {height: '50px'}} />
	)
}

export default CoinImage