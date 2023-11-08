import {Routes, Route} from 'react-router-dom';

import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/* public routes (sign up signed in) */}
            <Route element={<AuthLayout />}>
            <Route path="/sing-in" element={<SigninForm />} />
            <Route path="/sing-in" element={<SignupForm />} />
            </Route>


            {/* private routes */}
            <Route element= {<RootLayout/>}>
            <Route index element={<Home />} />
            </Route>
        </Routes>


    </main>
  )
}

export default App