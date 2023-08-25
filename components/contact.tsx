import React from 'react';

const Contact = () => {
  return (
    <form action="#" method="POST" className="py-8 mx-5">
      <div className=" lg:mr-0 w-full">
        <h1 className="uppercase text-lg">{`Let's work Together`}</h1>
        <h1 className="text-sm my-2">
          Lets get in touch and work with us. Drop us a line or two or three.
        </h1>
        <div className="lg:space-y-4 w-full">
          <div className="mb-2.5">
            <input
              type="text"
              placeholder="First Name *"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full  border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0 outline-none border-white bg-black pl-0 placeholder:text-white pr-3.5 py-2 text-white "
            />
          </div>
          <div className="mb-2.5">
            <input
              type="text"
              name="last-name"
              placeholder="Last Name *"
              id="last-name"
              autoComplete="family-name"
              className="block w-full  border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0 outline-none border-white bg-black pl-0 placeholder:text-white pr-3.5 py-2 text-white "
            />
          </div>
          <div className="mb-2.5">
            <input
              type="email"
              placeholder="Email *"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full  border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0 outline-none border-white bg-black pl-0 placeholder:text-white pr-3.5 py-2 text-white "
            />
          </div>
          <div className="mb-2.5">
            <input
              type="tel"
              placeholder=" Phone number *"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className="block w-full  border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0 outline-none border-white bg-black pl-0 placeholder:text-white pr-3.5 py-2 text-white "
            />
          </div>
          <div className="mb-2.5">
            <input
              type="text"
              placeholder="Message *"
              name="message"
              id="message"
              autoComplete="message"
              className="block w-full  border-b-2 focus:ring-0 border-t-0 border-l-0 border-r-0 outline-none border-white bg-black pl-0 placeholder:text-white pr-3.5 py-2 text-white "
            />
          </div>
        </div>
        <div className="mt-8 flex justify-start">
          <button
            type="submit"
            className=" bg-black border-white rounded-full border px-3.5 py-2.5 text-center text-sm font-semibol outline-none"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
