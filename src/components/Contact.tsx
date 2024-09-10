import { useEffect, useState } from 'react'
import { NavState } from '../constants/type'
import SectionWrapper from '../hoc/SectionWrapper'
import { validEmailReg } from '../constants/data'
import emailjs from '@emailjs/browser'
import { Title } from './subcomponents'
import { motion } from 'framer-motion'
import { fadeIn } from '../constants/utils'
import { IoIosSend } from 'react-icons/io'
import { FaCircleCheck } from 'react-icons/fa6'
import { MdOutlineError } from 'react-icons/md'

const Loader = () => {
  return (
    <div className="ml-2 relative w-10 h-10 loader">
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
  const [sendSuccess, setSendSuccess] = useState<boolean | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const getInputClass = (data: boolean) => {
    const inputClass =
      'py-4 px-5 placeholder:text-slate-500 text-slate-300 rounded-lg outline-none border-none'

    return `${inputClass} ${data ? 'bg-slate-800' : 'bg-slate-900'}`
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
      setLoading(false)
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
          setSendSuccess(true)
          setLoading(false)
          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          console.error(error)
          setSendSuccess(false)
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

  useEffect(() => {
    sendSuccess !== null && setTimeout(() => setSendSuccess(null), 5000)
  }, [sendSuccess])

  return (
    <>
      <Title text="Contact me" />
      <motion.div
        variants={fadeIn('left', 'spring', 0.6, 0.6)}
        className="border border-slate-800 p-8 pt-0 rounded-[10px] relative"
      >
        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-slate-300 mb-3">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={getInputClass(!!form.name && form.name != '')}
              autoComplete="name"
              required
            />
          </label>
          <label className="flex flex-col">
            <div className="mb-3">
              <span className="text-slate-300">Your Email</span>
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
              placeholder="john.doe@example.com"
              className={getInputClass(!!form.email && form.email != '')}
              autoComplete="email"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-slate-300 mb-3">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Hi Pittayah! This is John Doe, let's create something awesome together."
              className={getInputClass(!!form.message && form.message != '')}
              required
            />
          </label>

          <div className="flex justify-between items-start gap-6">
            <button
              type="submit"
              className={`ml-[1px] py-2 pl-3 pr-4 w-fit text-slate-400 hover:text-slate-100 text-base 
             button-shadow rounded-lg ${
               active ? 'bg-slate-700' : 'bg-slate-800'
             } ${loading ? 'h-11' : ''}
            `}
              disabled={loading}
            >
              {loading ? (
                <div className="flex mt-0.5">
                  <Loader />
                  <p>Sending...</p>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <IoIosSend size={26} />
                  <p>Send</p>
                </div>
              )}
            </button>

            <div
              className={`flex gap-2 items-center
                  transition duration-400 ${
                    sendSuccess !== null ? 'opacity-100' : 'opacity-0 '
                  } ${sendSuccess ? 'text-green-600' : 'text-red-400'} `}
            >
              {sendSuccess != null && (
                <>
                  <span>
                    {sendSuccess
                      ? 'Thank you for contacting me, I will get back to you as soon as possible.'
                      : 'Ahh, something went wrong. Please try again.'}
                  </span>
                  {sendSuccess ? (
                    <FaCircleCheck className="animate-bounce" size={22} />
                  ) : (
                    <MdOutlineError className="animate-bounce" size={24} />
                  )}
                </>
              )}
            </div>
          </div>
        </form>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Contact, NavState.Contact)
