import {Routes, Route, Navigate} from 'react-router-dom'
import {Homepage, Post, NotFound} from './pages'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to='/404' />} />
      </Routes>
  );
}

export default App;
