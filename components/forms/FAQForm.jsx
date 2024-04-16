import React from 'react'

const FAQForm = () => {
  return (
    <form className='bg-picton-blue-100 flex flex-col space-y-8 p-8 rounded-lg'>
        <div>
            <label htmlFor="question">Question:</label>
            <input type="text" id="question" name="question" required />
        </div>
        <div>
            <label htmlFor="answer">Answer:</label>
            <input type="text" id="answer" name="answer" required />
        </div>
        <div>
            <label htmlFor="userName">User Name:</label>
            <input type="text" id="userName" name="userName" required />
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>

        <p>We will send you a notification when your question has been answered.</p>

        <button type="submit">Submit</button>
    </form>
  )
}

export default FAQForm