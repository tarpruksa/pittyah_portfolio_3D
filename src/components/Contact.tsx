import React, { useEffect, useState } from 'react'
import { AnimationType } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { motion } from 'framer-motion'
import { textVariant } from '../constants/utils'
import { styles } from '../style'
import { validEmailReg } from '../constants/data'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Loader = () => {
  return (
    <div className="loader">
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  )
}

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)
  const [showNoValidEmail, setShowNoValidEmail] = useState<boolean>(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const getInputClass = (data: boolean) => {
    const inputClass =
      'bg-slate-900 py-4 px-6 placeholder:text-secondary text-slate-300 rounded-lg outline-none border-none font-medium'

    return `${inputClass}${data ? ' bg-slate-800' : ''}`
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const validateEmail = (e) => {
    if (e.target?.value && e.target.value.match(validEmailReg)) {
      handleChange(e)
      setShowNoValidEmail(false)
    } else {
      setShowNoValidEmail(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (showNoValidEmail) {
      return
    }

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Pittayah',
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          Swal.fire({
            title: 'Success!',
            text: 'Thank you for contacting me, I will get back to you as soon as possible.',
            icon: 'success',
            confirmButtonText: 'Ok',
          })
          setLoading(false)
          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          console.error(error)
          Swal.fire({
            title: 'Error!',
            text: 'Ahh, something went wrong. Please try again.',
            icon: 'error',
            confirmButtonText: 'Ok',
          })
          setLoading(false)
        }
      )
  }

  useEffect(() => {
    let vals = Object.values(form)
    if (vals.filter((x) => x).length === Object.keys(form).length) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [form])

  return (
    <>
      <motion.div variants={textVariant('down', 0.1)}>
        <h2 className={styles.sectionHeadText}>Contact me</h2>
      </motion.div>
      <div className="border-grey p-8 pt-0 rounded-[10px] relative">
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-slate-300 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={getInputClass(!!form.name && form.name != '')}
              required
            />
          </label>
          <label className="flex flex-col">
            <div>
              <span className="text-slate-300 font-medium mb-4">
                Your email
              </span>
              {showNoValidEmail && (
                <span className="ml-4 text-red-400">
                  Invalid email, please type again.
                </span>
              )}
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={validateEmail}
              placeholder="What's your web address?"
              className={getInputClass(!!form.email && form.email != '')}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-slate-300 font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className={getInputClass(!!form.message && form.message != '')}
              required
            />
          </label>

          <button
            type="submit"
            className={`p-2 px-3 h-12 w-40 send ${active ? 'active' : ''}`}
          >
            {loading ? (
              <div className="flex">
                <Loader />
                <p>Sending...</p>
              </div>
            ) : (
              <p>Send</p>
            )}
          </button>
        </form>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, AnimationType.Right)
