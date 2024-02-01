import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
// import { Layout } from './components';

export default function App () {
  return (
    <div className='text-2xl text-black'>
       <Routes>
        <Route element={<Layout />}>
          <Route path="/" element />
          <Route path="/" element />
          <Route path="/" element />
          <Route path='/' element />
          <Route path="/" element />
        </Route>
      </Routes>
    </div>
  );
}