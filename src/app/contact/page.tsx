export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-purple-100 to-purple-200 shadow-xl rounded-2xl mt-24 border border-gray-200 mb-20">
      <div className="flex flex-col space-y-3 items-center justify-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-snug tracking-tight">
          Contact Us
        </h1>
        <p className="text-sm text-gray-500 mt-2">If you have any questions or suggestions, feel free to reach out</p>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="text-gray-800 leading-relaxed text-lg space-y-4 mb-8" dir="ltr">
        <p>
          You can get in touch with us by sending a message through the form below, or by contacting us via email or social media.
        </p>
        <p>
          📧 Email: <a className="text-blue-700 underline" href="mailto:vihancode@gamil.com">vihancode@gamil.com</a>
        </p>
      </div>

      <form className="space-y-5" dir="ltr">
        <div>
          <label className="block mb-1 text-sm text-gray-700">Your Name</label>
          <input
            type="text"
            placeholder="Aria Hosseini"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Email</label>
          <input
            type="email"
            placeholder="vihancode@gamil.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Your Message</label>
          <textarea
            rows={5}
            placeholder="Write your message here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        <div className="text-left">
          <button
            type="submit"
            className="cursor-pointer px-6 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-10 text-center text-sm text-gray-500">
        We’d love ❤️ to hear from you
      </div>
    </div>
  );
}
