import { useEffect, useState } from 'react';
import QuizScreen from '../components/QuizScreen';
import ResultScreen from '../components/ResultScreen';
import questions from '../questions.json';
import { EndTime } from '@/components/EndTime';
import StartScreen from '@/components/StartScreen';

export default function HomePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timer, setTimer] = useState<number>(30)
  const [endTime, setEndTime] = useState(false)
  const [startGame, setStartGame] = useState(false)
  const handleStartGame = () => {
    setStartGame(true)
  }

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if(startGame == true){
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  
    return () => clearInterval(interval); }
  }, [startGame]);
  
  useEffect(() => {
    if(timer == 0){
      setEndTime(true)
    }
  }, [timer])
  
  

  const handleOptionPress = (option: string) => {
    if (option === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setTimer(30)
    }
    setSelectedOption(option);
    setIsOptionsDisabled(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsOptionsDisabled(false);
    } else {
      setIsQuizFinished(true);
    }
  };

  // Lógica de reinício agora está implementada
  const handlePlayAgain = () => {
    setIsQuizFinished(false);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsOptionsDisabled(false);
    setScore(0);
    setTimer(30)
    setEndTime(false)
  };

return endTime ? (
  <EndTime onPlayAgain={handlePlayAgain} />
) : isQuizFinished ? (
  <ResultScreen
    score={score}
    totalQuestions={questions.length}
    onPlayAgain={handlePlayAgain}
  />
) : startGame ? (
  <QuizScreen
    time={timer}
    currentQuestion={currentQuestion}
    selectedOption={selectedOption}
    isOptionsDisabled={isOptionsDisabled}
    onOptionPress={handleOptionPress}
    onNextQuestion={handleNextQuestion}
  />
) : (
  <StartScreen onStartQuiz={handleStartGame} />
);
}