import React from "react";
import WelcomeMesaage from "./WelcomeMessage"
import ConfirmFavourites from "./ConfirmFavourites"
import CoinListings from "../CoinGrid/CoinListings"
import Loader from "../Layout/Loader"
import Search from "./Search"

import {Context} from "../Provider"

const Settings = ({page}) => {
	return (
		<Loader page={page}>
			<CoinListings type={'favouriteType'} />
			<WelcomeMesaage />
			<ConfirmFavourites />
			<Search />
			<CoinListings />
		</Loader>
	)
}

export default Settings