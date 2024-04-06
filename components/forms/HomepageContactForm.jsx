"use client"

import {useState, useEffect} from 'react'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({ 
    name: z.string().nonempty(),
    email: z.string().email(),
    subject: z.string().nonempty(),
    message: z.string().nonempty()
})

// import { Form, FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage, } from '../ui/form'

import { Input } from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import { Textarea } from '../ui/textarea'

function HomepageContactForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    })

    const [mounted, setMounted] = useState(false)
    const [fields, setFields] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFields((prevFields) => ({
            ...prevFields, 
            [name]: value}))
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(fields);

//   console.log(watch("example")); 

    useEffect(() => {
        setMounted(true)
    }, [])

  return mounted && (
    <form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)} className='min-w-[300px] p-6 space-y-12'>
            <div>
                <label htmlFor="name" className='text-white'>Name</label>
                <Input {...register("example")}  id="name" placeholder="John Doe" />
            </div>
            <div>
                <label htmlFor="email" className='text-white'>Email</label>
                <Input  id="email" type="email" placeholder="" />
            </div>
            <div>
                <label htmlFor="subject" className='text-white'>Subject</label>
                <Input  id="subject" placeholder="John Doe" />
            </div>
            <div>
                <label htmlFor="message" className='text-white'>Message</label>
                <Textarea  id="message" placeholder="How can we help you?" />
            </div>
            
            <Button onClick={onSubmit} type="submit" className='w-1/2 border border-picton-blue-800 bg-white text-gray hover:bg-picton-blue-400'>Submit</Button>
        </form>
    </form>
  )
}

export default HomepageContactForm

// value={fields.name} onChange={handleChange}
// value={fields.email} onChange={handleChange}
// value={fields.subject} onChange={handleChange}
// value={fields.message} onChange={handleChange}