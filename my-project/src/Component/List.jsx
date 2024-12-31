import React, { useEffect, useState } from 'react'
import API from '../utils/api'
import { Link } from 'react-router-dom'


const List = () => {

  const [items, setItems] = useState([])

  const fetchitem = async() => {
    try{
      const result = await API.get('/doctor');
      setItems(result.data);
    } catch(err) {
      console.error("Database Get Error")
    }
  }

  const handleDelete = async(id) => {
    try {
      await API.delete(`/doctor/${id}`);
      fetchitem();
    } catch(err) {
      console.error("Database Delete Error")
    }
  }

  useEffect(() => {
    fetchitem()
  }, [])

  return (
    <div className="container mx-auto my-5">
    <Link to={'/create'} className="text-3xl font-bold mb-5 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Item</Link>
  
    <table className="min-w-full bg-white border border-gray-300 shadow-md rounded">
      <thead>
        <tr className="bg-gray-200 text-gray-700">
          <th className="text-left px-6 py-3 border-b">Name</th>
          <th className="text-left px-6 py-3 border-b">Age</th>
          <th className="text-left px-6 py-3 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className="hover:bg-gray-100">
            <td className="px-6 py-4 border-b">{item.name}</td>
            <td className="px-6 py-4 border-b">{item.age}</td>
            <td className="px-6 py-4 border-b flex gap-4">
              <Link to={`/edit/${item.id}`} className="text-blue-500 hover:underline">Edit Item</Link>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:underline"
              >
                Delete Item
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default List
