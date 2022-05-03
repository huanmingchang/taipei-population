import Nav from './components/Nav'
import Select from './components/Select'
import Chart from './components/Chart'

const Home = () => {
  return (
    <div className='flex flex-col md:flex-row max-w-[1280px] mx-auto'>
      <Nav />
      <div className='flex flex-col justify-start items-center md:items-start flex-grow h-screen md:pt-32 bg-gray-100'>
        <Select />
        <Chart />
      </div>
    </div>
  )
}

export default Home
