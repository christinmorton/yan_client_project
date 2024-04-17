import React from 'react'

const FAQForm = () => {
  return (
    <form className='bg-picton-blue-100 flex flex-col space-y-8 p-16 rounded-lg'>
        <div className='flex flex-col'>
            <label htmlFor="question" className='text-picton-blue-600'>Question:</label>
            <input type="text" id="question" name="question" required />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="answer" className='text-picton-blue-600'>Answer:</label>
            <input type="text" id="answer" name="answer" required />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="userName" className='text-picton-blue-600'>User Name:</label>
            <input type="text" id="userName" name="userName" required />
        </div>

        <div className='flex flex-col'>
            <label htmlFor="email" className='text-picton-blue-600'>Email:</label>
            <input type="email" id="email" name="email" required />
        </div>

        <p className='text-picton-blue-600'>We will send you a notification when your question has been answered.</p>

        <button type="submit" className='border border-picton-blue-300 p-6 rounded-md'>Submit</button>
    </form>
  )
}

export default FAQForm