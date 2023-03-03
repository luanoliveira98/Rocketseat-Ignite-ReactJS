import { useState } from 'react'

import { Header } from './components/Header';
import { Post } from './Post'

import "./styles.css";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Post 
        author="Luan Oliveira" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem non eum sequi! Esse, ex ab animi, eligendi qui asperiores cumque corporis illo vero hic eius reiciendis harum eos alias dolorem!"
      />
      <Post 
        author="Estefâne Oliveira" 
        content="A different post"
      />
    </div>
  )
}
