import { useContext } from 'react'
import { QuizContext } from './context/QuizContext'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'

function App() {
  const { gameState } = useContext(QuizContext)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {gameState === 'start' && <HomePage />}
        {gameState === 'playing' && <QuizPage />}
        {gameState === 'end' && <ResultPage />}
      </div>
    </div>
  )
}

export default App