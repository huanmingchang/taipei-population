import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const Chart = ({ population, curr }) => {
  let data = []
  if (population.length === 0) {
    data = []
  } else {
    population.map((item) => {
      if (curr === item.siteId) {
        data = [
          {
            name: '共同生活戶',
            male: item.ordinary_m,
            female: item.ordinary_f,
          },
          {
            name: '獨立生活戶',
            male: item.single_m,
            female: item.single_f,
          },
        ]
      }
    })
  }

  return (
    <div className='px-10 pt-10 flex-grow w-full h-full'>
      {data.length === 0 ? (
        <div>資料載入中請稍候</div>
      ) : (
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart width='100%' height='100%' data={data}>
            <CartesianGrid opacity={0.5} vertical={false} />
            <XAxis dataKey='name' axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[
                0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
              ]}
              domain={[0, 150]}
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
      )}
    </div>
  )
}

export default Chart
