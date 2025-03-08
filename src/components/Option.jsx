import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'

const Option = ({ id, text, isCorrect }) => {
  const { selectedOption, isAnswered, handleAnswerSelect } = useContext(QuizContext)
  
  const isSelected = selectedOption === id
  
  // Determine option class based on state
  let optionClass = 'option'
  
  if (isAnswered) {
    if (isCorrect) {
      optionClass += ' option-correct'
    } else if (isSelected) {
      optionClass += ' option-incorrect'
    } else {
      optionClass += ' option-disabled'
    }
  }
  
  return (
    <div 
      className={optionClass}
      onClick={() => !isAnswered && handleAnswerSelect(id)}
    >
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 border-2 border-gray-300 flex-shrink-0">
          {String.fromCharCode(65 + id)} {/* Convert 0-3 to A-D */}
        </div>
        <span className="text-gray-800">{text}</span>
      </div>
    </div>
  )
}

export default Option