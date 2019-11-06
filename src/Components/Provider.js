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
			favouriteCoins: cryptoDashData.favouriteCoins
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
			firstVisit: false
		})
		localStorage.setItem('cryptodash', JSON.stringify({
			favouriteCoins: this.state.favouriteCoins
		}))
	}

	fetchCoins = async () => {
		const response = await crypto.coinList()
		console.log(response.Data)
		this.setState({
			coinsList: response.Data
		})
	}

	componentDidMount(){
		this.fetchCoins();
	}

	render(){
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}