import { useAnecdoteActions, useNotificationActions } from '../store'

const AnecdoteForm = () => {
  const { add } = useAnecdoteActions()
  const { setMessage } = useNotificationActions()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    await add(content)
    e.target.reset()
    setMessage(`Added '${content}'`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input data-testid="new" name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm