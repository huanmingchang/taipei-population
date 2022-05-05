import Nav from './components/Nav'
import Select from './components/Select'
import Chart from './components/Chart'
import { GET_TAIPEI_DATA } from '../../global/api'
import { useState, useEffect } from 'react'

const Home = () => {
  const [data, setData] = useState([])
  const [siteId, setSiteId] = useState([])
  const [population, setPopulation] = useState([])
  const [currDistrict, setCurrDistrict] = useState('臺北市松山區')

  // 抓取 api 資料
  async function fetchData() {
    const res = await fetch(GET_TAIPEI_DATA)
    const data = await res.json()
    setData(data.responseData)
  }

  // 將 data 的行政區資料抓出來並存在 siteId 裡面
  function fetchSiteId() {
    const siteIdArr = data.map((item) => {
      return item.site_id
    })

    const newSiteIdArr = [...new Set(siteIdArr)]
    setSiteId(newSiteIdArr)
  }

  // 將 data 的人口資料取出
  function fetchPopulation() {
    // 遍歷行政區先建立一個物件
    const map = siteId.map((item) => {
      return {
        siteId: item,
        ordinary_m: [],
        ordinary_f: [],
        single_m: [],
        single_f: [],
      }
    })

    // 遍歷 data 和行政區做比對，把對應的人口數 push 到陣列當中，並轉換成數字以利後續計算
    data.map((item) => {
      for (let i = 0; i < map.length; i++) {
        if (item.site_id === map[i].siteId) {
          map[i].ordinary_m.push(Number(item.household_ordinary_m))
          map[i].ordinary_f.push(Number(item.household_ordinary_f))
          map[i].single_m.push(Number(item.household_single_m))
          map[i].single_f.push(Number(item.household_single_f))
        }
      }
    })

    // 建立一個新陣列，把之前 map 的人口資料做加總
    const newMap = map.map((item) => {
      return {
        ...item,
        ordinary_m: sum(item.ordinary_m),
        ordinary_f: sum(item.ordinary_f),
        single_m: sum(item.single_m),
        single_f: sum(item.single_f),
      }
    })
    setPopulation(newMap)
  }

  // 計算加總
  function sum(arr) {
    if (!arr) return
    return Math.floor(arr.reduce((a, b) => a + b) / 1000)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchSiteId()
  }, [data])

  useEffect(() => {
    fetchPopulation()
  }, [siteId])

  return (
    <div className='flex flex-col md:flex-row max-w-[1280px] mx-auto'>
      <Nav />
      <div className='flex flex-col justify-start items-center md:items-start shrink h-screen w-full md:pt-32 bg-gray-100'>
        <Select
          siteId={siteId}
          setCurrDistrict={setCurrDistrict}
          currDistrict={currDistrict}
        />
        <Chart population={population} currDistrict={currDistrict} />
      </div>
    </div>
  )
}

export default Home
