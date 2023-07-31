import './animation.css';

import * as React from 'react'
import { useState } from 'react'

interface AnimatedWordsProps {
    words: string[]
}

const animationStyling = {
  animation: 'FadeToRight 5s linear infinite',
}

export const AnimatedWords: React.FC<AnimatedWordsProps> = ({words}) => {
    const [currentWord, setCurrentWord] = useState(words[0])

    const resetAnimationWithNewWord = () => {
        const index = words.findIndex((w) => w === currentWord)
        setCurrentWord(words[(index + 1) % words.length])
    }

    return (
        <div className="inline-block">
            <div
              className="text-4xl md:text-6xl text-white"
              onAnimationIteration={resetAnimationWithNewWord}
              style={animationStyling}
            >
                {currentWord}
            </div>
        </div>
    )
}
