"use client"

import { useRouter } from 'next/navigation'
import {useState, useEffect} from 'react'

import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { Textarea } from '@/components/ui/textarea'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'

function SimpleForm() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [priority, setPriority] = useState('low')
  const [isLoading, setIsLoading] = useState(false)
  const [submitSuccessful, setSubmitSuccessful] = useState(false)

  useEffect(() => { 
    setMounted(true)
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(name === '' || email === '' || subject === '' || message === '') {
      alert('Please fill in all fields')
      return
    }

    console.log({name, email, subject, message, priority})

    const formData = {name, email, subject, message, priority}

    try {
      const res = await fetch('https://yan-client-project-uycp-git-ec556e-chrisbiz41gmailcoms-projects.vercel.app/api/messages', { 
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
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setPriority('low')
    }
  };

  return mounted && (
    <form onSubmit={event => handleSubmit(event)} className='min-w-[300px] p-6 space-y-12'>
        <div>
            <label htmlFor="name" className='text-white'>Name</label>
            <Input id="name" required onChange={e => setName(e.target.value)} value={name} placeholder="John Doe" />
        </div>
        <div>
            <label htmlFor="email" className='text-white'>Email</label>
            <Input  id="email" onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="JohnD57@email.com" />
        </div>
        <div>
            <label htmlFor="subject" className='text-white'>Subject</label>
            <Input  id="subject" onChange={e => setSubject(e.target.value)} value={subject} placeholder="John Doe" />
        </div>
        <div>
            <label htmlFor="priority" className='text-white'>Priority</label>
            <select id="priority" onChange={e => setPriority(e.target.value)} value={priority} className='w-full p-2 bg-white text-gray'>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
        </div>
        <div>
            <label htmlFor="message" className='text-white'>Message</label>
            <Textarea  id="message" onChange={e => setMessage(e.target.value)} value={message} placeholder="How can we help you?" />
        </div>
        
        <Button  disabled={isLoading} type="submit" className='w-1/2 border border-picton-blue-800 bg-white text-gray hover:bg-picton-blue-400'>
          {isLoading && <span className='animate-spin'>Loading...</span>}
          {!isLoading && <span>Send Message</span>}
        </Button>
    </form>
  )
}

export default SimpleForm

