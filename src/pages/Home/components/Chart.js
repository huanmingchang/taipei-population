import { useEffect } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const Chart = ({ population }) => {
  let data = []
  console.log(population[0])

  function fetchProps() {
    data = [
      {
        name: '共同生活戶',
        male: population[0].ordinary_m,
        female: population[0].ordinary_f,
      },
      {
        name: '獨立生活戶',
        male: population[0].single_m,
        female: population[0].single_f,
      },
    ]

    return data
  }

  useEffect(() => {
    fetchProps()
  }, [population])

  return (
    <div className='px-10 pt-10 flex-grow w-full border-4 border-solid'>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart height='700px' data={data}>
          <CartesianGrid opacity={0.5} vertical={false} />
          <XAxis dataKey='name' axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickCount={10}
            ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            domain={[0, 100]}
          />
          <Legend
            formatter={(value) => {
              if (value.includes('female')) {
                return (value = '女')
              } else {
                return (value = '男')
              }
            }}
          />
          <Bar
            label={{
              fill: 'rgb(159 18 57)',
              fontSize: 20,
              fontWeight: 700,
              position: 'top',
            }}
            dataKey='male'
            fill='rgb(100 116 139)'
          />
          <Bar
            label={{
              fill: 'rgb(159 18 57)',
              fontSize: 20,
              fontWeight: 700,
              position: 'top',
            }}
            dataKey='female'
            fill='rgb(244 114 182)'
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
