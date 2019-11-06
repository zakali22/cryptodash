import React from "react"
import {BounceLoader} from "react-spinners"
import {Context} from "../Provider"
import {css} from 'styled-components'

const override = css`
	display: block;
	justify-self: center;
	margin-top: 2rem
`

const Loader = (props) => {
	return (
		<Context.Consumer>
			{(({coinsList}) => {
					return (
						<>
							{coinsList ? props.children : <BounceLoader loading={true} size={70} color={'#123abc'} css={override} />}
						</>
					)
				}
			)}
		</Context.Consumer>
	)
}

export default Loader;