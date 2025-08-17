import React from 'react'
import { useState } from 'react';


//for empty fields once send btn clicked
  // const defaultcontactFormData = {
  //   name: "",
  //   email: "",
  //   message: "",
  // }


const Contact = () => {

const [name, setname] = useState("");
const [email, setemail] = useState('');
const [message, setmessage] = useState('');


const handleSubmission = async (e) => {
  e.preventDefault();
  //object create kr k data laina hai jo backend mein bhej sakyein
    const contactData = {
    name,
    email,
    message,
  }

  //using fetch
  try {
    const response = await fetch('http://localhost:8080/api/v1/post' , {
      method: "POST",
      headers: {
    'Content-Type': 'application/json' 
  },
  //humain json pass krna hai
  body: JSON.stringify(contactData)
    })

  if (!response.ok) {
      throw new Error('Network response was not ok');
    }

const result = await response.json();
 if (response.ok) {
      alert("Message sent successfully");
      
      setname('');
      setemail('');
      setmessage('');

    } else {
      alert("Message not sent");
    }

  } catch (error) {
    console.log('error submitting form:', error );
    
  }

}


  return (
    <div  id="contact" className='flex justify-center items-center flex-col mt-20'>
      <h1 className='text-white text-2xl italic font-semibold'>
        Let's Build Something Amazing
      </h1>
      <h1 className='text-gray-400 font-semibold'>Looking for a full-stack developer who can architect and implement complete solutions? Let's discuss your project.</h1>


    <div className="mt-12 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6">Send Message</h2>
            
            <form onSubmit={handleSubmission}>
            <div className="space-y-6">
              <div className="flex flex-col md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor='username' className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>

                  <input type="text" name='username' required autoComplete='off' className='border text-gray-400 rounded-xl w-full pl-4 pr-4 py-2 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none' 
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Your name"
 />

 <label htmlFor='email' className="mt-4 block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>

                  <input type="text" name='username' required autoComplete='off' className='border text-gray-400 rounded-xl w-full pl-4 pr-4 py-2 bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none'
                  value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="Your email"
 />
                  </div>

<div>
                <label htmlFor='usermsg' className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>

                <div className="relative">
                  <textarea
                    name="message"
                    required
                    autoComplete='off'
                    rows={6}
                    className='w-full pl-4 pr-4 py-3 bg-gray-700 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none'
                  value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  />
                </div>


                  </div>
                  </div>

  <button
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer"
                type='submit'
              >
          
               <span>Send Message</span>
          
              </button>
                </div>
              </form>
           
      <div>
            <button
              // onClick={downloadCV}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group mt-10 cursor-pointer"
            >
              <span className="text-lg">Download My Resume</span>
            </button>
          </div>
      </div>        

     </div>
  )
}

export default Contact


















