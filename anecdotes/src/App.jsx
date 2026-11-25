import AnecdoteForm from './components/AnecdoteForm'
import { useAnecdotes, useAnecdoteControls } from "./store"

const App = () => {
  const anecdotes = useAnecdotes()

  const { vote } = useAnecdoteControls()

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <AnecdoteForm />
    </div>
  )
}

export default App
