import React from "react"

const CoinHeader = ({name, symbol, favouriteType, tileType, priceCoin}) => {
	let priceChange = priceCoin ? priceCoin.USD.CHANGEPCT24HOUR.toFixed(4) : null;
	let stylePrice = {
		color: priceChange ? (priceChange > 0 ? 'green' : 'red') : null,
		fontSize: '1.2rem'
	};
	return (
		<div className="coins__coinsgrid--coin__header">
		{tileType !== 'priceTile' ? (
			<>
				<p>{name}</p>
				<p style={{'display': favouriteType ? 'none' : 'block'}}>{favouriteType ? 'X' : symbol}</p>
			</>
		) : (
			<>
				<p>{priceCoin.symbol}</p>
				<p style={stylePrice}>{priceChange}%</p>
			</>
		)}
		</div>
	)
}

export default CoinHeader