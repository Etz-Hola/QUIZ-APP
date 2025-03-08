import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import QuizCard from '../components/QuizCard'
import ProgressBar from '../components/ProgressBar'

const QuizPage = () => {
  const { score } = useContext(QuizContext)
  
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quiz</h1>
        <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-semibold">
          Score: {score}
        </div>
      </div>
      
      <ProgressBar />
      <QuizCard />
    </div>
  )
}

export default QuizPage