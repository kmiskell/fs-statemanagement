import { useFeedbackValues } from '../store'

const Statistics = () => {
  const { good, neutral, bad, all } = useFeedbackValues()
  
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <tr><td>good</td><td>{good}</td></tr>
          <tr><td>neutral</td><td>{neutral}</td></tr>
          <tr><td>bad</td><td>{bad}</td></tr>
          <tr><td>all</td><td>{all}</td></tr>
          <tr><td>average</td><td>{all ? ((good - bad) / all) : 0}</td></tr>
          <tr><td>positive</td><td>{all ? (good / all * 100) : 0} %</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
