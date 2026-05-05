import { useEffect, useState } from 'react'

function useTypingEffect(text, typingSpeed = 120, deletingSpeed = 80, holdDelay = 1300) {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeoutId

    if (!isDeleting && displayText === text) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), holdDelay)
    } else if (isDeleting && displayText.length === 0) {
      timeoutId = window.setTimeout(() => setIsDeleting(false), 500)
    } else {
      timeoutId = window.setTimeout(
        () => {
          const nextLength = isDeleting
            ? Math.max(displayText.length - 1, 0)
            : Math.min(displayText.length + 1, text.length)

          setDisplayText(text.slice(0, nextLength))
        },
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => window.clearTimeout(timeoutId)
  }, [deletingSpeed, displayText, holdDelay, isDeleting, text, typingSpeed])

  return displayText
}

export default useTypingEffect
