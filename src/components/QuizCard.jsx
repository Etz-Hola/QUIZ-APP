import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import Option from './Option'

const QuizCard = () => {
  const { questions, currentQuestionIndex } = useContext(QuizContext)
  
  const currentQuestion = questions[currentQuestionIndex]
  
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="inline-block bg-indigo-100 px-3 py-1 rounded-full text-sm font-medium text-indigo-800 mb-2">
          {currentQuestion.category}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
          {currentQuestion.question}
        </h2>
      </div>
      
      <div className="space-y-3">
        {currentQuestion.options.map((option, index) => (
          <Option 
            key={index}
            id={index}
            text={option}
            isCorrect={index === currentQuestion.correctAnswer}
          />
        ))}
      </div>
    </div>
  )
}

export default QuizCard