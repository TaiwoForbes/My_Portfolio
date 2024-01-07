import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { name, email, message } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const wordVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        variants={wordVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="px-10  text-left text-blackish font-semibold text-[3rem] lg:text-[3rem]">
          Get In Touch ✨
        </h1>
        <h2 className="px-10 text-left text-blackish font-semibold text-[1.6rem] lg:text-[3rem]">
          Let's create something Amazing
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-[3rem] md:justify-between md:h-screen p-10">
        <div className="flex-[0.2]">
          <div className="flex flex-col  gap-[1.2rem]">
            <motion.article
              className="bg-grey border-white border-[0.1rem] w-[100%] py-[2rem] px-[2rem]  rounded-[1.2rem] flex flex-col justify-center items-center border-5 border-transparent"
              variants={wordVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <MdOutlineEmail className="text-[1.5rem] mb-[0.5rem]" />
              <h4 className="font-medium">Email</h4>
              <h1>soyemihissa2000@gmail.com</h1>
              <a
                className="mt-[0.7rem] inline-block text-[1rem] text-blackish"
                href="mailto:soyemihissa2000@gmail.com"
                target="_blank"
              >
                Send a message
              </a>
            </motion.article>

            <motion.article
              className="bg-grey border-white border-[0.1rem] w-[100%] py-[2rem] px-[2rem]  rounded-[1.2rem] flex flex-col justify-center items-center border-5 border-transparent"
              variants={wordVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <MdOutlineEmail />
              <h4 className="font-medium">Messenger</h4>
              <h1>soyemi hissa</h1>
              <a
                className="mt-[0.7rem] inline-block text-[1rem] text-blackish"
                href="https"
                target="_blank"
              >
                Send a message
              </a>
            </motion.article>

            <motion.article
              className="bg-grey border-white border-[0.1rem] w-[100%] py-[2rem] px-[2rem]  rounded-[1.2rem] flex flex-col justify-center items-center border-5 border-transparent"
              variants={wordVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <BsWhatsapp />
              <h4 className="font-medium">Whatsapp</h4>
              <h1>+2348181138484</h1>
              <a
                className="mt-[0.7rem] inline-block text-[1rem] text-blackish"
                href="https://api.whatsapp.com/send?phone=+2348181138484
                "
                target="_blank"
              >
                Send a message
              </a>
            </motion.article>
          </div>
        </div>

        <motion.div
          className="flex-[0.5]"
          variants={wordVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <form
            className="flex bg-grey p-10 rounded-[1rem] flex-col gap-1.2rem"
            action=""
          >
            <label htmlFor="">Name</label>
            <input
              className="100% p-[0.7rem] text-white mt-[0.2rem] mb-[1rem] rounded-[0.5rem] bg-blk  resize-none"
              type="text"
              name="name"
              onChange={onChange}
              value={name}
            />
            <label htmlFor="">E-mail Address</label>
            <input
              className="100% p-[0.7rem] text-white mt-[0.2rem] mb-[1rem] rounded-[0.5rem] bg-blk  resize-none"
              type="email"
              name="email"
              onChange={onChange}
              value={email}
            />

            <label htmlFor="">Message</label>
            <textarea
              className="100% p-[0.7rem] text-white mt-[0.2rem] mb-[1rem] rounded-[0.5rem] bg-blk  resize-none"
              name="message"
              onChange={onChange}
              value={message}
              id=""
              cols="30"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="100% p-[0.7rem] text-blk mt-[0.2rem] mb-[1rem] rounded-[0.5rem] bg-white font-bold  resize-none"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
