import Link from 'next/link';
import Image from 'next/image';
import Login from "@/components/Login";
import '@/styles/login.css'

const FirstPage = () => {
  return (
    <div className='flex flex-col items-center text-center w-full'>
      <Link href='/'>
        <div className='logo_name flex flex-row items-center text-center w-full'>
          <Image src="/assets/logos/FinTrackLogo.png"
            height={120} width={200} alt="FinTrackLogo" className='logo_name_image' />
          <h1 className="text-8xl font-bold">FinTrack</h1>
        </div>
      </Link>
      <Image src="/assets/images/gradientCoin.png"
        height={120} width={200} alt="gradientCoin" className='gradient_coin' />
      <Image src="/assets/images/creditCards.png"
        height={120} width={200} alt="creditCards" className='credit_cards' />
      <p className='text-xl website_description'>Personal finance platform with intuitive expense tracking empowering you to take control of your financial journey</p>
      <p>Want to see a sample?</p>
      <button type='button' className='login_page_buttons text-base'><span>Sample</span></button>
      <input type='text'></input>
      <input type='password'></input>
      <Link href='/forgotpassword'>Forgot password?</Link>
      <button type='button' className='login_page_buttons text-base'><span>Login</span></button>
      <p>Don't have an account?</p>
      <button type='button' className='login_page_buttons text-base'><span>Sign Up</span></button>
      <Login />
    </div>
  )
}

export default FirstPage;
