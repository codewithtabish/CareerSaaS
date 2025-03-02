import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <Image
        src="/carousel-1.jpg"
        alt="The Best Kindergarten School"
        width={1920}
        height={1080}
        className="w-full h-[80vh] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-white text-5xl font-bold mb-4 animate-fadeIn">
              The Best Kindergarten School For Your Child
            </h1>
            <p className="text-white text-lg mb-6 animate-fadeIn">
              Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
            </p>
            <div className="space-x-4">
              <a href="#" className="bg-[#FE5D37] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e04c2f] transition animate-fadeIn">
                Learn More
              </a>
              <a href="#" className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition animate-fadeIn">
                Our Classes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
