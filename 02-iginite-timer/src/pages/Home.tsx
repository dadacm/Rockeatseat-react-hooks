import { Play } from 'phosphor-react'

export const Home = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" />
        <label htmlFor="minutesAmount">durante</label>
        <input id="minutesAmount" />
        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>
        <button type="submit">
          Começar <Play />
        </button>
      </form>
    </div>
  )
}
