import { useState } from 'react'
import { Post } from './Post'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
