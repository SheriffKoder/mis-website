"use client"

import React, { useState } from "react"
import { ChangeEventHandler, FormEventHandler } from "react";


const Form = () => {

 ////////////////////////////////////////////////////////////////////////////////////
 const [emailBody, setEmailBody] = useState({
    name: "",
    email: "",
    phone: "",
    content: "",
  });

  const { name, email, phone, content } = emailBody;

  // const messageContainer_inquiry = useRef<HTMLDivElement>(null)

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement > = ({ target }) => {

    const { name, value } = target;
    setEmailBody({ ...emailBody, [name]:value});

  }


    //handle the inquiry submission
    const handleSubmit: FormEventHandler<HTMLFormElement>  = async (e) => {
        e.preventDefault();
        // console.log(emailBody);
          const res = await fetch("/api/mail", {
              method: "POST",
              body: JSON.stringify(emailBody),
    
          }).then((res) => res.json());
          console.log(res);
    
        //   if (res === "Email Sent") showEmailConfirm();
    
      }
    
  return (
    <form className="flex flex-col gap-4 px-[2rem]" onSubmit={handleSubmit}
    id="contact__form">

      <div className="flex flex-col gap-4">


        {/* name */}
        <div className="flex flex-col gap-2">

          <label className="FormLabel" htmlFor="name">
            Name
          </label>

          <input
            className="FormInput h-[2.5rem]"
            id="name"
            maxLength={35}
            name="name"
            value={name}
            onChange={handleChange}
            required
            type="text"
            placeholder="John Smith"
            />
        </div>


        {/* email */}
        <div className="flex flex-col gap-2">
          <label className="FormLabel" htmlFor="email">
            Email
          </label>
          <input
            className="FormInput h-[2.5rem]"
            id="email"
            maxLength={35}
            name="email"
            value={email}
            onChange={handleChange}
            required
            type="email" 
            placeholder="youremail@email.com"
            />
        </div>

        {/* phone */}
        <div className="flex flex-col gap-2">
          <label className="FormLabel" htmlFor="email">
            Phone
          </label>
          <input
            className="FormInput h-[2.5rem]"
            id="phone"
            maxLength={35}
            name="phone"
            value={phone}
            onChange={handleChange}
            required
            type="text"
            placeholder="+00123456789"/>
        </div>

      </div>

      {/* text-area, email body */}
      <div className="flex flex-col gap-2 mdx:gap-0 mdx:flex-row h-[7rem] xl:h-[12rem] 
      items-center mdx:items-start"
      id="contact__text-area">

        <label className="FormLabel" htmlFor="inquiry">
          More details
        </label>

        <textarea
        className="border-0 FormInput h-full w-full py-2 resize-none"
        name="content"
        value={content}
        onChange={handleChange}
        required
        id="inquiry"
        placeholder="describe your inquiry"
        >

        </textarea>

        
        
      </div>

      <div className="flex flex-col gap-0 mdx:gap-0 mdx:flex-row items-center
       w-full"
      id="contact__submit-button">

        {/* the submit button */}
        <div className="mt-[1rem] flex w-full justify-center">
          <button type="submit"
            className="w-full px-4 py-1 flex items-center justify-center rounded-full
      neon_button gap-2 hover:gap-3 transition-all duration-100 ease-out">
                  Send message
          </button>
        </div>                
      
      </div>

    </form>
  )
}

export default Form
