import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-neon-cyan-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center md:text-left">
                <span className="text-neon-cyan-500">GALERA</span> - YOUR SOLUTION IN MOBILE AND WEB DEVELOPMENT
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-lg">
                At Galera, we combine technical expertise with a client-first approach. We create high-quality apps that are scalable, cost-effective, and tailored to your unique requirements — so you get the results you need without overspending.
              </p>
            </div>
            
            <button 
              onClick={() => {
                const element = document.getElementById('what-we-do');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center text-neon-cyan-500 hover:text-neon-cyan-600 font-medium group cursor-pointer"
            >
              See what we do
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <img src="/hero-img.png"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;