import logo from '../static/taipeilogo.png'

const Nav = () => {
  return (
    <nav className='flex flex-col items-center justify-start md:min-w-[200px] md:h-screen'>
      <div className='pt-10 w-3/12 h-3/12 sm:w-2/12 sm:h-2/12 md:w-6/12 md:h-6/12'>
        <img src={logo} alt='' />
      </div>
      <div className='text-sm sm:text-base mb-3'>109 年人口戶數及性別</div>
    </nav>
  )
}

export default Nav
