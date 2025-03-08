import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { calculatePercentage } from '../utils/helpers'

const ProgressBar = () => {
  const { currentQuestionIndex, questions } = useContext(QuizContext)
  
  // Calculate progress percentage
  const progress = calculatePercentage(currentQuestionIndex + 1, questions.length)
  
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
        <span>{progress}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar