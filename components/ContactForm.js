import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const submitForm = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <div className="flex justify-center text-gray-200 font-heading">
      <form
        onSubmit={submitForm}
        action="https://formspree.io/xleldvbb"
        method="POST"
      >
        <div className="flex w-192 mb-4">
          <div className="inline-flex flex-col flex-grow mr-2">
            <label className="text-lg mb-2">Name:</label>
            <input
              className="bg-indigo-900 flex-grow font-body"
              type="text"
              name="name"
            />
          </div>
          <div className="inline-flex flex-col flex-grow ml-2">
            <label className="text-lg mb-2">Email:</label>
            <input
              className="bg-indigo-900 font-body"
              type="email"
              name="email"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-lg">Message:</label>
          <textarea
            className="flex-grow h-48 mt-2 mb-4 bg-indigo-900 font-body"
            type="text"
            name="message"
          />
        </div>
        <div className="flex justify-end">
          {status === "ERROR" && (
            <h1 className="animated bounceIn text-red-600 mr-8">Oh no! There was an error.</h1>
          )}
          {status === "SUCCESS" ? (
            <h1 className="animated flipInY text-teal-300" >Thanks!</h1>
          ) : (
            <button className="outline-button transition-easing hover:bg-teal-300 hover:border-transparent hover:text-white">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
