import React from "react"
import CoinHeader from "./CoinHeader"
import CoinImage from "./CoinImage"

const disabledTile = {
	"pointerEvents": 'none',
	"opacity": 0.4
}

const Coin = ({coin, type, addFavourites, removeFavourites, isInFavourites}) => {
	console.log(coin)
	let typeClass = type ? `coins__coinsgrid--coin__${type}` : "c";
	let onClickFunction = type ? removeFavourites : addFavourites;
	let applyDisabledStyling = !type ? (isInFavourites(coin.Name) ? disabledTile : null) : null;
	return (
		<div className={`coins__coinsgrid--coin ${typeClass}`} onClick={e => onClickFunction(coin.Name)} style={applyDisabledStyling}>
			<CoinHeader name={coin.CoinName} symbol={coin["Symbol"]} favouriteType={type ? true : false}/>
			<CoinImage image={coin.ImageUrl} symbol={coin.Symbol}/>
		</div>
	)
}

export default Coin