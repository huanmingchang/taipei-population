import Nav from './components/Nav'
import Select from './components/Select'
import Chart from './components/Chart'
import { GET_TAIPEI_DATA } from '../../global/api'
import { useState, useEffect, useRef } from 'react'

const Home = () => {
  // 抓取 api 資料
  async function fetchData(setSiteId) {
    const res = await fetch(GET_TAIPEI_DATA)
    const data = await res.json()

    // 從 data 當中取出行政區資料
    let site_id = []
    data.responseData.map((item) => {
      site_id.push(item.site_id)
    })
    site_id = new Set(site_id)
    site_id = [...site_id]
    setSiteId(site_id)
  }

  const [siteId, setSiteId] = useState([])

  useEffect(() => {
    fetchData(setSiteId)
  }, [])

  return (
    <div className='flex flex-col md:flex-row max-w-[1280px] mx-auto'>
      <Nav />
      <div className='flex flex-col justify-start items-center md:items-start flex-grow h-screen md:pt-32 bg-gray-100'>
        <Select siteId={siteId} />
        <Chart />
      </div>
    </div>
  )
}

export default Home
