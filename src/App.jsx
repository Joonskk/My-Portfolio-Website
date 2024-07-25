import Nav from './components/Nav'
import Intro from './components/Intro'
import Works from './components/Works'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  const works = [
    {
      id: 1,
      title: 'Work 1',
      description: 'This is a description for work 1',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 2,
      title: 'Work 2',
      description: 'This is a description for work 2',
      skills: ['HTML', 'CSS', 'React'],
    },
    {
      id: 3,
      title: 'Work 3',
      description: 'This is a description for work 3',
      skills: ['HTML', 'Typescript', 'Next.js'],
    },
  ]
  
  return (
    <BrowserRouter>
      <main className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/works" element={<Works works={works} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
