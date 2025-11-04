import { Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import ChapterNotes from './pages/ChapterNotes'
import NotesPreview from './pages/NotesPreview'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/chapter-notes" element={<ChapterNotes />} />
      <Route path="/notes-preview" element={<NotesPreview />} />
    </Routes>
  )
}

export default App
