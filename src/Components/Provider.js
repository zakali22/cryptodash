import React, {Component} from "react"
import crypto from 'cryptocompare'

// Export Context and Provider
export const Context = React.createContext();

export class Provider extends Component {
	constructor(props){
		super(props);
		this.state = {
			page: 'Dashboard',
			setPage: this.setPage, 
			confirmFavourites: this.confirmFavourites,
			coinsList: null,
			favouriteCoins: [],
			addFavourites: this.addFavourites,
			removeFavourites: this.removeFavourites,
			isInFavourites: this.isInFavourites,
			isLight: false,
			filteredCoins: null,
			setFilteredCoins: this.setFilteredCoins,
			pricesList: null,
			updateCurrentFav: this.updateCurrentFav,
			getCurrentFavCoinDetails: this.getCurrentFavCoinDetails,
			...this.initialLoad(),
		}
	}
	
	setPage = (page) => {
		this.setState({
			page
		})
	}

	initialLoad = () => {
		let cryptoDashData = JSON.parse(localStorage.getItem('cryptodash'));
		if(!cryptoDashData){
			return {
				page: 'Settings',
				firstVisit: true
			}
		}
		return {
			favouriteCoins: cryptoDashData.favouriteCoins,
			pricesList: cryptoDashData.pricesList,
			currentFav: cryptoDashData.currentFav,
			coinsList: cryptoDashData.coinsList
		}
	}

	addFavourites = (coin) => {
		let favouriteCoins = [...this.state.favouriteCoins];
		let MAX_FAV_COINLIST = 10
		if(favouriteCoins.length < MAX_FAV_COINLIST){
			favouriteCoins.push(coin);
			this.setState({
				favouriteCoins
			})
		}

	}

	isInFavourites = (coin) => {
		let favouriteCoins = [...this.state.favouriteCoins];
		let coinMatch = favouriteCoins.findIndex((el) => {
			return el === coin
		})

		if(coinMatch !== -1) return true;

		return false;
		
	}

	removeFavourites = (coin) => {
		let favouriteCoins = [...this.state.favouriteCoins];
		if(favouriteCoins.length > 0){
			let coinIndex = favouriteCoins.findIndex((el) => {
				return el === coin
			});
			favouriteCoins = [...this.state.favouriteCoins.slice(0, coinIndex), ...this.state.favouriteCoins.slice(coinIndex+1, this.state.favouriteCoins.length)]
			this.setState({
				favouriteCoins
			}, () => {
			})
			/* Another way to remove an element from an array */

			// favouriteCoins = favouriteCoins.filter((el) => {
			// 	return el !== coin
			// })
		}
	}

	confirmFavourites = () => {
		this.setState({
			page: 'Dashboard',
			firstVisit: false,
			currentFav: 0
		}, () => {
			this.coinPriceFetch().then(response => {
				localStorage.setItem('cryptodash', JSON.stringify({
					coinsList: this.state.coinsList,
					favouriteCoins: this.state.favouriteCoins,
					currentFav: this.state.currentFav,
					pricesList: this.state.pricesList
				}))
			});
		})
	}

	updateCurrentFav = (index) => {
		this.setState({
			currentFav: index
		}, () => {
			localStorage.setItem('cryptodash', JSON.stringify({
				coinsList: this.state.coinsList,
				favouriteCoins: this.state.favouriteCoins,
				currentFav: this.state.currentFav,
				pricesList: this.state.pricesList
			}))
		})
	}

	getCurrentFavCoinDetails = () => {
		if(this.state.pricesList){
			let pricesList = [...this.state.pricesList];
			let coinsList = this.state.coinsList;
			let favCoinSelected = pricesList[this.state.currentFav];
			let findFavInCoinsList = null;
			for(let coin in coinsList){
				if(coinsList[coin]["Symbol"] === favCoinSelected['symbol']){
					findFavInCoinsList = coinsList[coin]
				}
			}

			return findFavInCoinsList
		}
	}

	fetchCoins = async () => {
		const response = await crypto.coinList()
		this.setState({
			coinsList: response.Data
		}, () => {
			localStorage.setItem('cryptodash', JSON.stringify({
				coinsList: this.state.coinsList,
				favouriteCoins: this.state.favouriteCoins,
				currentFav: this.state.currentFav,
				pricesList: this.state.pricesList

			}))
		})
	}

	coinPriceFetch = async () => {
		let pricesList = await this.fetchPrices();
		// pricesList = pricesList.filter(price => Object.keys(price).length);
		
		this.setState({pricesList})
	}

	fetchPrices = async () => {
		if(this.state.firstVisit) return;
		let priceList = [];
		
		if(this.state.favouriteCoins.length){
			let priceOfCoin = await crypto.priceFull(this.state.favouriteCoins, ['USD'])
			console.log(this.state.favouriteCoins)
			console.log(priceOfCoin)
			for(let coin in priceOfCoin){
				priceList.push({
					symbol: coin, 
					...priceOfCoin[coin]
				})
			}
			
		}
		return priceList
		
	}

	setFilteredCoins = (filteredCoins) => {
		this.setState({
			filteredCoins
		})
	}


	componentDidMount(){
		this.fetchCoins();
		this.fetchPrices();
	}

	render(){
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}