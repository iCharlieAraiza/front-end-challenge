import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Post from './pages/Post'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
  );
}

export default App;
