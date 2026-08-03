"use client";
import React, { useRef } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { FaYoutube } from "react-icons/fa";

export default function YouTubeShorts() {
  const scrollRef = useRef(null);

  const shortsList = [
    { id: "yN2DwTlqsdo", title: "MBBS Overseas Guidance" },
    { id: "hAIMSFDZaNI", title: "Student Experience & Tips" },
    { id: "O23xcJeCXc4", title: "Medical Admission Updates" },
    { id: "fORxNOhK_ac", title: "University Insights" },
    { id: "Lt1Nrf2dT_s", title: "Campus & Hostel Details" },
    { id: "uYnydhotNUU", title: "NMC Guidelines & Rules" },
    { id: "nMsCgw8-kek", title: "Student Guidance & Counseling" },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-ghost relative overflow-hidden" id="youtube-shorts">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-medical/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-medical font-black tracking-[0.4em] text-[10px] uppercase mb-4">
              <FaYoutube className="text-xl text-red-600" />
              <span>Watch Us On YouTube</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-navy leading-tight">
              Featured <span className="text-medical">Shorts & Guidance</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-navy flex items-center justify-center hover:bg-medical hover:text-white hover:border-medical transition-all shadow-sm active:scale-95"
            >
              <HiOutlineChevronLeft className="text-xl" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 text-navy flex items-center justify-center hover:bg-medical hover:text-white hover:border-medical transition-all shadow-sm active:scale-95"
            >
              <HiOutlineChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {shortsList.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[310px] snap-start group"
            >
              <div className="bg-white rounded-[32px] p-3 border border-gray-100 shadow-md group-hover:shadow-2xl group-hover:border-medical/30 transition-all duration-300">
                <div className="relative w-full aspect-[9/16] rounded-[24px] overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.id}?autoplay=0&rel=0`}
                    title={item.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-12 text-center">
          <a
            href="https://youtube.com/@steth06?si=aazRHB_hDKjwwW9C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-navy text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-medical transition-all shadow-lg hover:shadow-medical/20"
          >
            <FaYoutube className="text-red-500 text-lg" />
            <span>Subscribe To Our Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
}
