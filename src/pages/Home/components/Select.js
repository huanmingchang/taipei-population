const Select = () => {
  return (
    <div className='flex flex-row items-center justify-center md:justify-start pb-4 px-10 w-full bg-white md:bg-transparent'>
      <label className='text-sm sm:text-base mr-2'>地區</label>
      <select className='text-sm sm:text-base w-4/12 min-w-[100px] max-w-[250px] border-solid border-2 rounded border-gray-300 p-1 bg-white'>
        <option value=''>Please select</option>
        <option value=''>1</option>
        <option value=''>2</option>
        <option value=''>3</option>
      </select>
    </div>
  )
}

export default Select
