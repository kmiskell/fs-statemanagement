
import { create } from 'zustand'
import anecdoteService from './services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const useAnecdoteStore = create((set) => ({
  anecdotes: [],
  filter: '',
  actions: {
    add: content => set(
      state => ({ anecdotes: state.anecdotes.concat({
        content: content,
        id: getId(),
        votes: 0
      })})
    ),
    vote: id => set(
      state => {
        // add the vote
        const updatedAnecdotes = state.anecdotes.map(anecdote =>
          anecdote.id === id ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote
        )
        // sort everything
        const sortedAnecdotes = updatedAnecdotes.toSorted((a, b) => b.votes - a.votes)
        // set the new state
        return { anecdotes: sortedAnecdotes }
      }
    ),
    setFilter: value => set(() => {
      console.log('setting filter to: ', value)
      return { filter: value }
    }),
    initialize: async () => {
      const anecdotes = await anecdoteService.getAll()
      set(() => ({ anecdotes: anecdotes }))
    }
  },
}))

export const useAnecdotes = () => {
  const anecdotes = useAnecdoteStore((state) => state.anecdotes)
  const filter = useAnecdoteStore((state) => state.filter)

 return anecdotes.filter(a => a.content.includes(filter))
}
export const useAnecdoteControls = () => useAnecdoteStore((state) => state.actions)