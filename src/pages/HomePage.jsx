import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import Button from '../components/Button'

const HomePage = () => {
  const { startQuiz } = useContext(QuizContext)
  
  return (
    <div className="p-6 md:p-8 text-center">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
          QuizMaster
        </h1>
        <p className="text-gray-600 text-lg">
          Test your knowledge across various topics!
        </p>
      </div>
      
      <div className="bg-indigo-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">How to Play</h2>
        <ul className="text-left text-gray-700 space-y-2">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mr-2 mt-0.5">1</span>
            <span>Answer 10 randomly selected questions</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mr-2 mt-0.5">2</span>
            <span>Each question has 4 options with only 1 correct answer</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mr-2 mt-0.5">3</span>
            <span>Earn 2 points for each correct answer</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-800 font-medium text-sm mr-2 mt-0.5">4</span>
            <span>See your final score at the end</span>
          </li>
        </ul>
      </div>
      
      <Button onClick={startQuiz} className="w-full md:w-auto">
        Start Quiz
      </Button>
    </div>
  )
}

export default HomePage