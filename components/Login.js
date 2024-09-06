import Link from 'next/link';

import '@/styles/login.css';


const Login = () => {

  return (
    <div className='flex flex-col items-center text-center w-full'>
      <div className="input_container">
        <input type="text" id="username" required />
        <label htmlFor="username" className="floating_label">Username</label>
      </div>
      <div className="input_container">
        <input type="password" id="password" required />
        <label htmlFor="password" className="floating_label">Password</label>
      </div>
      <Link href='/forgotpassword'>Forgot password?</Link>
      <button type='button' className='login_page_buttons text-base'><span>Login</span></button>
      <p>Don't have an account?</p>
      <button type='button' className='login_page_buttons text-base'><span>Sign Up</span></button>
    </div>
  )
}

export default Login
