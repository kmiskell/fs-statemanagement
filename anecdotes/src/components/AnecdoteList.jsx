import { useAnecdotes, useAnecdoteActions, useNotificationActions } from '../store'

const AnecdoteList = () => {
  const anecdotes = useAnecdotes()

  const { vote, remove } = useAnecdoteActions()
  const { setMessage } = useNotificationActions()

  const handleVote = async (anecdote) => {
    await vote(anecdote.id)
    setMessage(`Voted for '${anecdote.content}'`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleRemove = async (anecdote) => {
    await remove(anecdote.id)
    setMessage(`Removed '${anecdote.content}'`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
            {(anecdote.votes === 0) && (
              <button onClick={() => handleRemove(anecdote)}>remove</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList