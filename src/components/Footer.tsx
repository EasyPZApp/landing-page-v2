export default function Footer() {
    return (
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <a href="https://twitter.com/easypz_app" className="hover:opacity-80">
                <span className="sr-only">Twitter</span>
                {/* Twitter icon */}
              </a>
              <a href="/faq" className="hover:opacity-80">FAQ</a>
              <a href="mailto:support@easypz.app" className="hover:opacity-80">Contact</a>
              <a href="/privacy" className="hover:opacity-80">Privacy Policy</a>
              <a href="/terms" className="hover:opacity-80">Terms and Conditions</a>
            </div>
            <p className="text-sm text-center">© 2024 EasyPZ, created by "El Vagabundo"</p>
          </div>
        </div>
      </footer>
    )
  }