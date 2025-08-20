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
                <img src="/mobile-icon.png" className="h-[45px] w-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">MOBILE</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Native and cross-platform mobile apps for iOS and Android.
                We build with Swift, Kotlin, Flutter, and React Native, covering everything from concept to App Store / Google Play deployment. 
                Our apps deliver smooth performance and intuitive experiences users love.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-neon-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/web-icon.png" className="h-[45px] w-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">WEB</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We build modern web applications using React, TypeScript, Node.js, Next.js, and cloud-native technologies. Our solutions are responsive, fast, and scalable, designed to perform flawlessly across all devices and browsers.
                From financial platforms and SaaS dashboards to e-commerce stores, social & dating apps, booking systems, and AI-powered tools, we tailor every project to your business goals — ensuring maximum impact at the right cost.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-neon-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <img src="/other-solutions-icon.png" className="h-[45px] w-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">OTHER SOLUTIONS</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Custom software solutions tailored to your business.
                From API integrations (REST, GraphQL) to database design (PostgreSQL, MongoDB, MySQL) and cloud deployments (AWS, Azure, Vercel, Netlify) — we help you connect, scale, and innovate with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
