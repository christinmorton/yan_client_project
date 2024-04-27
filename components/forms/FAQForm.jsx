'use client'

import { useRouter } from 'next/navigation'
import {useState, useEffect} from 'react'

import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"

const FAQForm = () => {
    const router = useRouter()
    const [mounted, setMounted] = useState(false)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [question, setQuestion] = useState('')

    const [submitSuccessful, setSubmitSuccessful] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => { 
    setMounted(true)
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if(username === '' || email === '' || question === '') {
          alert('Please fill in all fields')
          return
        }
    
        console.log({username, email, question})
    
        const formData = {username, email, question}
    
        try {
          const res = await fetch('https://yan-client-project-uycp-git-ec556e-chrisbiz41gmailcoms-projects.vercel.app//api/faqs', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          })
    
          if(res.status === 200) {
            alert('success')
            setSubmitSuccessful(true);
          } else if(res.status === 400) {
            alert('failed')
          } else {
            alert('error sending form data')
          }
    
        } catch (error) {
          console.log(error)
          alert('Something went wrong. Please try again later.')
        } finally {
          setIsLoading(false)
          setUsername('')
          setEmail('')
          setQuestion('')
        }
      };

  return mounted && (
    <form onSubmit={event => handleSubmit(event)} className='bg-picton-blue-100 flex flex-col space-y-8 p-16 rounded-lg'>
        <div className='flex flex-col'>
            <label htmlFor="question" className='text-picton-blue-600'>Question:</label>
            <Input type="text" id="question" onChange={e => setQuestion(e.target.value)} value={question} name="question" required   />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="userName" className='text-picton-blue-600'>Username:</label>
            <Input type="text" id="username" name="username" required onChange={e => setUsername(e.target.value)} value={username} />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="email" className='text-picton-blue-600'>Email:</label>
            <Input type="email" id="email" name="email" required onChange={e => setEmail(e.target.value)} value={email} />
        </div>

        <p className='text-picton-blue-600'>We will send you a notification when your question has been answered.</p>

        <Button type="submit" className='border border-picton-blue-300 p-6 rounded-md'>Submit</Button>
    </form>
  )
}

export default FAQForm