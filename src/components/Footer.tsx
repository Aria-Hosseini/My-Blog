export default function Footer (){
    return(
        <footer className="w-full bg-neutral-200 border-t border-gray-300 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} All Rights Reserved | my Blog</p>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            GitHub
          </a>
          <a
            href="/contact"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Contact Us
          </a>
          <a
            href="/aboute"
            className="text-gray-600 hover:text-blue-500 transition"
          >
            Aboute Us
          </a>
        </div>
      </div>
    </footer>
    )
}