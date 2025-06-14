import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {SectionWrapper} from '../hoc'
import {slideIn} from '../utils/motion' 

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_mkousso', 'template_haia83b',
      {
        name: form.name,
        to_name: 'Aman',
        email: form.email,
        to_email: 'mansuriaman2112@gmail.com',
        message: form.message
      },'RxCRwy-9Q6Dme5JcS'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    })
}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex=[0.75] bg-black-100 p-8 rounded-2xl min-w-[600px]'>
      <p className = {styles.sectionSubText}> Get in touch</p>
      <h3 className={styles.sectionHeadText}> Contact.</h3>
      <form
        ref = {formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input 
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className='bg-tertiary py-4 px-6 p
            laceholder:text-secondary text-white rounded-lg 
            outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your E-mail</span>
          <input 
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className='bg-tertiary py-4 px-6 p
            laceholder:text-secondary text-white rounded-lg 
            outline-none border-none font-medium'
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
            rows='7'
            type='text'
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to convey?"
            className='bg-tertiary py-4 px-6 
            placeholder:text-secondary text-white rounded-lg 
            outline-none border-none font-medium'
          />
        </label>
        <button
          type = 'submit'
          className='bg-tertiary py-3 px-8 outline-none w-fit text-white
          font-bold shadow-md shadow-primary rounded-xl'
        >
          {loading ? 'Sending...' : 'Send'}
        </button>

      </form>

      </motion.div>
    </div>
    
  )
}
//template_haia83b
//service_mkousso
//RxCRwy-9Q6Dme5JcS
export default SectionWrapper(Contact, "contact")