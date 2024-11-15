import React, { useEffect, useState } from "react"

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = event => {
    setCursorPosition({ x: event.pageX, y: event.pageY })
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      className="custom-cursor"
      style={{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`
      }}
    />
  )
}

export default CustomCursor
