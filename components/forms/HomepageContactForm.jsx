"use client"

import React from 'react'
import { useForm } from 'react-hook-form'

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
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='min-w-[300px]'>
        <div>
            <label htmlFor="name">Name</label>
            <Input {...register("example")} id="name" placeholder="John Doe" />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <Input {...register("example")} id="email" type="email" placeholder="" />
        </div>
        <div>
            <label htmlFor="subject">Subject</label>
            <Input {...register("example")} id="subject" placeholder="John Doe" />
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <Textarea {...register("example")} id="message" placeholder="How can we help you?" />
        </div>
        
        <Button type="submit">Submit</Button>
    </form>
  )
}

export default HomepageContactForm