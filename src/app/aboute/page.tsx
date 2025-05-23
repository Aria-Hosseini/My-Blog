export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-purple-100 to-purple-200 shadow-xl rounded-2xl mt-24 border border-gray-200 mb-20">
      <div className="flex flex-col space-y-3 items-center justify-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-snug tracking-tight">
          Aboute Us
        </h1>
        <p className="text-sm text-gray-500 mt-2">some informations and missions</p>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="text-gray-800 leading-relaxed text-lg space-y-4">
        <p>
          At our website, we strive to create a dynamic and valuable space for sharing knowledge, experiences, and expert insights.

        </p>
        <p>
          Our goal is to build a community where personal and professional growth are at the heart of everything we do. Every article and piece of content is carefully curated to support your journey toward self-improvement and lifelong learning.

        </p>
        <p>
          We always welcome your feedback and ideas. Feel free to reach out to us via email or through our social media channels — we’d love to hear from you!

        </p>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        Coded And Developed By Aria Hosseini.
      </div>
    </div>
  );
}
