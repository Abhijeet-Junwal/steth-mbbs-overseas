"use client";
import React from 'react';
import { HiOutlineCalendarDays, HiOutlineUser, HiOutlineArrowRight } from "react-icons/hi2";

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "NMC New Guidelines 2026: What has changed for Abroad Students?",
      excerpt: "The National Medical Commission has recently updated the criteria for Foreign Medical Graduates. Here is everything you need to know about the 54-month course rule.",
      date: "Oct 12, 2025",
      author: "Dr. Sandeep",
      category: "NMC Updates",
      img: "https://images.unsplash.com/photo-1576091160611-259c0dfdbb03?q=80&w=800"
    },
    {
      id: 2,
      title: "Top 5 Countries for MBBS with Low Budget and High FMGE Passing Rate",
      excerpt: "Finding a balance between affordability and quality is tough. We analyze the latest passing statistics of 2024-25 to find the best value destinations.",
      date: "Nov 05, 2025",
      author: "Admission Expert",
      category: "Guides",
      img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800"
    },
    {
      id: 3,
      title: "The Reality of MBBS in Georgia: Why it's becoming the #1 choice for Indians",
      excerpt: "Georgia offers a unique European lifestyle and high clinical standards. We dive deep into why 5000+ Indians chose Tbilisi this year.",
      date: "Dec 20, 2025",
      author: "Steth Team",
      category: "Country Spotlight",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=800"
    }
  ];

  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* BLOG HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-medical font-black tracking-[0.4em] text-[10px] uppercase mb-4">Knowledge Hub</h2>
          <h1 className="text-5xl md:text-7xl font-display font-black text-navy leading-none mb-8">
            Insights for Future <span className="text-medical">Doctors.</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            Stay updated with the latest news on medical education, entrance exams, and international university rankings.
          </p>
        </div>

        {/* FEATURED POST */}
        <section className="mb-24 group cursor-pointer">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-ghost rounded-[60px] overflow-hidden p-6 md:p-12 border border-gray-100 transition-all hover:shadow-2xl">
            <div className="h-[400px] rounded-[40px] overflow-hidden shadow-xl">
              <img 
                src={posts[0].img} 
                alt="Featured Post" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="space-y-6">
              <span className="px-4 py-2 bg-white rounded-full text-medical font-black text-[10px] uppercase tracking-widest border border-gray-100">
                {posts[0].category}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-navy leading-tight group-hover:text-medical transition-colors">
                {posts[0].title}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-8 text-gray-400 text-xs font-bold uppercase tracking-widest pt-4">
                <span className="flex items-center gap-2"><HiOutlineCalendarDays className="text-medical text-lg"/> {posts[0].date}</span>
                <span className="flex items-center gap-2"><HiOutlineUser className="text-medical text-lg"/> {posts[0].author}</span>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="h-80 rounded-[48px] overflow-hidden mb-8 shadow-lg">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <span className="text-medical font-black text-[10px] uppercase tracking-widest mb-4 block">
                {post.category}
              </span>
              <h3 className="text-3xl font-black text-navy mb-4 group-hover:text-medical transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-500 leading-relaxed line-clamp-2 mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                <div className="w-12 h-12 rounded-2xl bg-ghost flex items-center justify-center text-navy group-hover:bg-medical group-hover:text-white transition-all">
                  <HiOutlineArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}