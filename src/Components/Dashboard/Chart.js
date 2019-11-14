import React from "react"
import {Context} from "../Provider"
import highchartconfig from "../HighCharts/HighchartsConfig"
import ReactHighCharts from "react-highcharts"
import HighchartTheme from "../HighCharts/HighchartTheme"

ReactHighCharts.Highcharts.setOptions(HighchartTheme)

const Chart = () => {
	return (
		<Context.Consumer>
			{() => {
				return <ReactHighCharts config={highchartconfig()}/>

			}}
		</Context.Consumer>
	)
}

export default Chart