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
          <tr><td>average</td><td>{(good - bad) / all}</td></tr>
          <tr><td>positive</td><td>{good / all * 100}%</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
