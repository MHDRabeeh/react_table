import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import DataTable from './Components/DataTable'
import './App.css'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    try {
      async function fetch() {
        const data = await axios.get('http://universities.hipolabs.com/search?country=')
        const slicedData=  data.data.slice(0,5000)
        setData(slicedData)
        // console.log(data.data);
      }
      fetch()


    } catch (error) {
      console.log(error);

    }


  }, [])

  return (
    <>
      <div className=''>

        <DataTable data={data} setData={setData}/>
      </div>
    </>
  )
}

export default App
