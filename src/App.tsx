import {Routes, Route} from 'react-router-dom';

import './globals.css';
const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public routes (sign up signed in) */}
            <Route path="/sing-in" element={<SigninForm />} />

            {/* private routes */}
            <Route index element={<Home />} />
        </Routes>

    </main>
  )
}

export default App