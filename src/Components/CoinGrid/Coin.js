import React from "react"
import CoinHeader from "./CoinHeader"
import CoinImage from "./CoinImage"
import lightTheme from "../lightTheme"

const disabledTile = {
	"pointerEvents": 'none',
	"opacity": 0.4,

}

const Coin = ({coin, type, addFavourites, removeFavourites, isInFavourites, isLight}) => {
	console.log(isLight)
	let typeClass = type ? `coins__coinsgrid--coin__${type}` : "c";
	let onClickFunction = type ? removeFavourites : addFavourites;
	let applyDisabledStyling = !type ? (isInFavourites(coin.Name) ? {...disabledTile, ...lightTheme(isLight)} : lightTheme(isLight)) : lightTheme(isLight);
	return (
		<div className={`coins__coinsgrid--coin ${typeClass}`} onClick={e => onClickFunction(coin.Name)} style={applyDisabledStyling}>
			<CoinHeader name={coin.Name} symbol={coin["Symbol"]} favouriteType={type ? true : false}/>
			<CoinImage image={coin.ImageUrl} symbol={coin.Symbol}/>
		</div>
	)
}

export default Coin