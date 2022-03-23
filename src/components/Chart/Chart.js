import ChartBar from './ChartBar';
import './Chart.css';


const Chart=(props)=>{
    const dataPointValues= props.dataExpense.map((data)=>data.value);
    const totalMaximum= Math.max(...dataPointValues)
    return(
        <div className="chart">
            {props.dataExpense.map((data)=> <ChartBar key={data.month} maxValue={totalMaximum} dataValue={data.value} dataLabel={data.month}></ChartBar>)}
        </div>
    )
}

export default Chart