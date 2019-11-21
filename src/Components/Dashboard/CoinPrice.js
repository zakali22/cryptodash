import React from "react"
import CoinHeader from "../CoinGrid/CoinHeader"
import lightTheme from "../lightTheme"

const favTile = {
	"boxShadow": "0px 0px 4px 1px #03ff03",
	"pointerEvents": 'none'
}

const CoinPrice = ({coin, type, index, currentFav, updateCurrentFav, isLight}) => {
	let price = coin.USD.PRICE;
	price = price >=1 ? price.toFixed(2) : price.toFixed(5);
	return (
		<div className={`coins__coinsgrid--coin ${index+1 > 5 ? 'compact-coinTile' : ''}`} style={currentFav ? {...favTile, ...lightTheme(isLight)} : lightTheme(isLight)} onClick={e => updateCurrentFav(index)} >
			<CoinHeader tileType="priceTile" name={coin.CoinName} symbol={coin["Symbol"]} priceCoin={coin} favouriteType={type ? true : false}/>
			<h3>${price}</h3>
		</div>
	)
}

export default CoinPrice