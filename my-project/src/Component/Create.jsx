import React, { useState } from 'react'
import API from '../utils/api'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const[name, setName] = useState('')
  const[age, setAge] = useState()
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await API.post('/doctor', {name, age});
      navigate("/");
    } catch (err) {
      console.error("Creating Error")
    }}
  return (
<div className="container mx-auto my-5 max-w-lg">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter your name"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
        Age:
      </label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(parseInt(e.target.value))}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter your age"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  </form>
</div>

  )
}

export default Create
