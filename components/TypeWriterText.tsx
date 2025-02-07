'use client'

import { useEffect, useState } from 'react'

interface TypewriterTextProps {
  texts: string[]
  className?: string
}

export function TypewriterText({ texts, className }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isTyping) {
      const currentWord = texts[currentTextIndex]
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1))
        }, 50)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentTextIndex, texts])

  return <h3 className={className}>{displayText}</h3>
}