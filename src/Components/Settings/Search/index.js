import React from 'react'
import {Context} from "../../Provider"
import _ from 'lodash'
import lightTheme from "../../lightTheme"

const filteredCoinsList = (value, coinsList, setFilteredCoins) => {
	// Get all the coin symbols
	let coinSymbols = Object.keys(coinsList);
	// Get all the coin names
	let coinNames = coinSymbols.map((symbol) => {
		return coinsList[symbol]
	})

	let coinMatches = coinNames.filter((coin) => {
		return _.includes(coin["CoinName"].toLowerCase(), value.toLowerCase())
	}).map((coin) => {
		return coin.Symbol
	})

	console.log(coinMatches)
	setFilteredCoins(coinMatches)
}

const onChangeHandler = (e, coinsList, setFilteredCoins) => {
	let {value} = e.target;
	filteredCoinsList(value, coinsList, setFilteredCoins)
}

const Search = () => {
	return (
		<Context.Consumer>
		{({coinsList, setFilteredCoins, isLight}) => {
			console.log(coinsList)
			let style = {
				...lightTheme(isLight),
				color: '#061a44'
			}
			return (
				<div className="settings__search">
					<label>
						Search for a coin
						<input type="text" name="coin__input" placeholder="Search coin" onChange={e => onChangeHandler(e, coinsList, setFilteredCoins)} style={style}/>
					</label>
				</div>
				)
			}
		}
		</Context.Consumer>
	)
}

export default Search;