import React from 'react';
import { DollarSign, Users, TrendingUp, Search, Zap, Target } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What We Do Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">WHAT WE DO</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-neon-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-neon-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">MOBILE</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Native and cross-platform mobile applications for iOS and Android. 
                From concept to App Store deployment, we create engaging mobile experiences 
                that users love.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-neon-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-neon-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">WEB</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Modern web applications and websites built with the latest technologies. 
                Responsive, fast, and scalable solutions that work perfectly across all devices 
                and browsers.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-neon-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-neon-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">OTHER SOLUTIONS</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom software solutions tailored to your specific needs. 
                API integrations, database design, cloud solutions, and more. 
                Contact us to discuss your unique requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
