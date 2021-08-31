import React, { useState } from "react";
import emailjs from "emailjs-com";

import { init } from "emailjs-com";
init("user_PnHqCfBQyUJosloO8PoZN");

const InputSelect = ({ title, options = ["Option"] }) => {
  const [toggleSelected, setToggleSelected] = useState(false);
  const [inputSelected, setInputSelected] = useState("");

  return (
    <>
      <div
        className="c-input c-input--option flex justify-between"
        onClick={() => {
          setToggleSelected(!toggleSelected);
        }}
        onMouseEnter={() => {
          setToggleSelected(true);
        }}
        onMouseLeave={() => {
          setToggleSelected(false);
        }}
      >
        <div>
          {inputSelected.length <= 0 ? title : inputSelected}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className={`c-option ${
            toggleSelected
              ? "c-option--selected slideFadeDown"
              : "c-option--unselected"
          }`}
        >
          {options &&
            options.map((option, index) => {
              return (
                <div
                  key={index}
                  className="c-option__select"
                  onClick={() => {
                    setInputSelected(option);
                  }}
                >
                  {option}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_prtm46a",
        e.target,
        "user_PnHqCfBQyUJosloO8PoZN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      {/* <form className="p-8 bg-white" onSubmit={sendEmail}>
        <input className="bg-gray-200" type="hidden" name="contact_number" />
        <label>Name</label>
        <input className="bg-gray-200	" type="text" name="user_name" />
        <label>Email</label>
        <input className="bg-gray-200	" type="email" name="user_email" />
        <label>Message</label>
        <textarea className="bg-gray-200	" name="message" />
        <input type="submit" value="Send" />
      </form> */}
      <form
        className="mt-8 flex flex-col w-full sm:w-5/12"
        onSubmit={sendEmail}
      >
        <InputSelect
          title="Select subject"
          options={["Promo", "Management", "Demo", "Other"]}
        ></InputSelect>
        <textarea
          className="c-input mt-4"
          placeholder="Write something.."
          rows={4}
        ></textarea>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="user_name"
            className="c-input mt-4 "
            placeholder="Full name.."
          ></input>
          <input
            type="email"
            name="user_email"
            className="c-input mt-4"
            placeholder="Email address.."
          ></input>
        </div>
        <button className="c-button mt-8" type="submit">
          Send
        </button>
      </form>
    </>
  );
}
