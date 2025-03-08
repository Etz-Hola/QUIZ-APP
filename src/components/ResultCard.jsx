import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { calculatePercentage } from '../utils/helpers'

const ResultCard = () => {
  const { score, questions, restartQuiz } = useContext(QuizContext)
  
  const totalPossibleScore = questions.length * 2
  const scorePercentage = calculatePercentage(score, totalPossibleScore)
  
  // Result message based on score percentage
  let resultMessage = ''
  let resultClass = ''
  
  if (scorePercentage >= 90) {
    resultMessage = 'Excellent! You are a quiz master!'
    resultClass = 'text-green-600'
  } else if (scorePercentage >= 70) {
    resultMessage = 'Great job! You did very well!'
    resultClass = 'text-blue-600'
  } else if (scorePercentage >= 50) {
    resultMessage = 'Good effort! You passed the quiz.'
    resultClass = 'text-indigo-600'
  } else {
    resultMessage = 'Keep practicing! You can improve next time.'
    resultClass = 'text-orange-600'
  }
  
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Quiz Results</h2>
      
      <div className="flex justify-center mb-8">
        <div className="relative w-48 h-48">
          <div className="w-48 h-48 rounded-full flex items-center justify-center bg-indigo-100">
            <div className="text-indigo-700">
              <div className="text-5xl font-bold">{score}</div>
              <div className="text-xl">out of {totalPossibleScore}</div>
            </div>
          </div>
          
          {/* SVG circle progress indicator */}
          <svg 
            className="absolute top-0 left-0 w-48 h-48" 
            viewBox="0 0 100 100"
          >
            <circle 
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke="#E0E7FF" 
              strokeWidth="8"
            />
            <circle 
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke="#6366F1" 
              strokeWidth="8" 
              strokeDasharray="283" 
              strokeDashoffset={283 - (283 * scorePercentage / 100)} 
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
        </div>
      </div>
      
      <p className={`text-xl font-medium mb-8 ${resultClass}`}>
        {resultMessage}
      </p>
      
      <button
        onClick={restartQuiz}
        className="btn btn-primary"
      >
        Play Again
      </button>
    </div>
  )
}

export default ResultCard