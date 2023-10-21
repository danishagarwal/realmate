import React from "react";

const contact = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">How we can help you </h1>
          <p className="text-center max-w-lg">
            Fill out the form and a member of our team will get back to you with
            24 hours, here's more way to get in touch
          </p>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="flex mx-auto">
          <form className="ml-2 bg-blue-200 py-8 px-6 shadow rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                className="w-full"
                autocomplete="off"
                id="email"
                type="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input id="email" type="password" required />
            </div>
          </form>

          {/* ORIGINAL FORM */}
          <form className="ml-96 px-16 py-10 bg-blue-200 shadow rounded-lg">
            <h1 className="text-center text-xl font-bold">
              Always we did love to hear from you
            </h1>
            <div className="py-10">
              <label className="block text-sm font-medium text-gray-700">
                Your Name *
              </label>
              <input
                placeholder="Danish Agarwal"
                className="text-sm p-2 w-96"
                autoComplete="off"
                id="name"
                type="text"
                required
              />

              <label className="mt-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                placeholder="dan@gmail.com"
                className="text-sm p-2 w-96"
                autoComplete="off"
                id="email"
                type="email"
                required
              />

              <label className="mt-2 block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                placeholder="Write your subject here"
                className="p-2 text-sm w-96"
                autoComplete="off"
                id="subject"
                type="text"
                required
              />

              <label className="mt-2 block text-sm font-medium text-gray-700">
                Description
              </label>
              <input
                className="h-60 text-sm w-96"
                autoComplete="off"
                id="desc"
                type="text"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
