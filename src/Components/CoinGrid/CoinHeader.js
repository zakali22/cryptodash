import React from "react"

const CoinHeader = ({name, symbol, favouriteType}) => {
	return (
		<div className="coins__coinsgrid--coin__header">
			<p>{name}</p>
			<p style={{'display': favouriteType ? 'none' : 'block'}}>{favouriteType ? 'X' : symbol}</p>
		</div>
	)
}

export default CoinHeader