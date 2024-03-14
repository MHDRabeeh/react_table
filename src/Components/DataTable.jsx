import React from 'react'
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
const DataTable = ({ data, setData }) => {

    const handlDelete = (index) => {
        setData((prev) => {
            prev.splice(index, 1)
            return [...prev]
        })





    }

    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Order number
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" className="px-6 py-3">
                                State
                            </th>

                            <th scope="col" className="px-6 py-3">
                                University Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Domain
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, i) => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {i + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item?.country}
                                    </td>
                                    <td className="px-6 py-4">
                                        {/* {item?.state-province} */}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.domains.map((item) => (

                                            <a href=''>{item}</a>

                                        ))}
                                    </td>

                                    <td className="px-6 py-4  flex gap-3 ">
                                        <span className='text-red-400 text-2xl cursor-pointer' onClick={() => handlDelete(i)}><MdDelete /></span>
                                        <span className='text-blue-500 text-2xl cursor-pointer'><MdEdit /></span>
                                    </td>

                                </tr>
                            ))

                        }




                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default DataTable


// {
//     "alpha_two_code": "IN",
//     "web_pages": [
//         "https://www.upes.ac.in/"
//     ],
//     "state-province": "Dehradun",
//     "name": "University of Petroleum and Energy Studies",
//     "domains": [
//         "upes.ac.in"
//     ],
//     "country": "India"
// }