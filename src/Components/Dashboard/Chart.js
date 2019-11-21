import React from "react"
import {Context} from "../Provider"
import highchartconfig from "../HighCharts/HighchartsConfig"
import ReactHighCharts from "react-highcharts"
import HighchartTheme from "../HighCharts/HighchartTheme"

ReactHighCharts.Highcharts.setOptions(HighchartTheme)

const Chart = () => {
	return (
		<Context.Consumer>
			{({historical, changeTimeInterval}) => {
				console.log(historical)
				return (
					<div className="dashboard__chart">
						<select defaultValue="months" onChange={e => changeTimeInterval(e.target.value)}>
							<option value="days">Days</option>
							<option value="weeks">Weeks</option>
							<option value="months">Months</option>
						</select>
						<ReactHighCharts config={highchartconfig(historical)}/>
					</div>
				)

			}}
		</Context.Consumer>
	)
}

export default Chart