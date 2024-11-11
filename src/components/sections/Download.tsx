export default function Download() {
    return (
      <section className="py-16 text-center">
        <h2 className="font-asap font-semibold text-3xl mb-4">
          Ready to go? 🚽
        </h2>
        <p className="font-mukta-vaani text-gray-700 mb-8">
          Download EasyPZ now and never worry about finding a restroom again.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://apps.apple.com/us/app/easypz/id6448388765">
            <img 
              src="/images/store-ios.png" 
              alt="Download on the App Store" 
              className="h-12"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.beelphegor91.easypz">
            <img 
              src="/images/store-android.png" 
              alt="Get it on Google Play" 
              className="h-12"
            />
          </a>
        </div>
      </section>
    )
  }