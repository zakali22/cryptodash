import React from "react";
import WelcomeMesaage from "./WelcomeMessage"
import ConfirmFavourites from "./ConfirmFavourites"
import CoinListings from "../CoinGrid/CoinListings"
import {Context} from "../Provider"

const Settings = () => {
	return (
		<>
			<CoinListings type={'favouriteType'} />
			<WelcomeMesaage />
			<ConfirmFavourites />
			<CoinListings />
		</>
	)
}

export default Settings