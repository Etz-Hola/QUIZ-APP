import { createContext, useState, useEffect } from 'react'
import { shuffleArray } from '../utils/helpers'
import allQuestions from '../data/questions'

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const [gameState, setGameState] = useState('start')
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  
  // Get 10 random questions when game starts
  const startQuiz = () => {
    // Shuffle the array of all questions and take the first 10
    const shuffledQuestions = shuffleArray([...allQuestions]).slice(0, 10)
    setQuestions(shuffledQuestions)
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setGameState('playing')
  }
  
  // Handle answer selection
  const handleAnswerSelect = (optionId) => {
    if (isAnswered) return
    
    setSelectedOption(optionId)
    setIsAnswered(true)
    
    const currentQuestion = questions[currentQuestionIndex]
    if (optionId === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 2)
    }
    
    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1)
        setSelectedOption(null)
        setIsAnswered(false)
      } else {
        setGameState('end')
      }
    }, 1500)
  }
  
  const restartQuiz = () => {
    setGameState('start')
  }
  
  const value = {
    gameState,
    questions,
    currentQuestionIndex,
    score,
    selectedOption,
    isAnswered,
    startQuiz,
    handleAnswerSelect,
    restartQuiz
  }
  
  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}