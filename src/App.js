import {Routes, Route, Navigate} from 'react-router-dom'
import ModalForm from './components/ModalForm';
import {Homepage, Post, NotFound} from './pages'
import Edit from './pages/Edit';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<ModalForm />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to='/404' />} />
      </Routes>
  );
}

export default App;
