import React from 'react'
import {Context} from "../../Provider"
import _ from 'lodash'

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
		{({coinsList, setFilteredCoins}) => {
			console.log(coinsList)
			return (
				<div className="settings__search">
					<label>
						Search for a coin
						<input type="text" name="coin__input" placeholder="Search coin" onChange={e => onChangeHandler(e, coinsList, setFilteredCoins)} />
					</label>
				</div>
				)
			}
		}
		</Context.Consumer>
	)
}

export default Search;