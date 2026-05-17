import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const followerRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const fPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dotRef.current.style.left = e.clientX + 'px'
      dotRef.current.style.top = e.clientY + 'px'
    }

    const animate = () => {
      fPos.current.x += (pos.current.x - fPos.current.x) * 0.14
      fPos.current.y += (pos.current.y - fPos.current.y) * 0.14
      followerRef.current.style.left = fPos.current.x + 'px'
      followerRef.current.style.top = fPos.current.y + 'px'
      requestAnimationFrame(animate)
    }

    const raf = requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMove)

    const links = document.querySelectorAll('a, button')
    links.forEach(el => {
      el.addEventListener('mouseenter', () => {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(2.5)'
        followerRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)'
        followerRef.current.style.borderColor = 'var(--moss)'
      })
      el.addEventListener('mouseleave', () => {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
        followerRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      })
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}