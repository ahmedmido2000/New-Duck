"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, ArrowLeft, ArrowRight } from "lucide-react";

interface Partner {
  name: string;
  logo: string;
  bgDark?: boolean;
}

const partners: Partner[] = [
  {
    name: "الاتصالات السعودية STC",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlmvzTPIbzUHoaF4hEZq8KXeWK5htp1dxX9VVPDn1sqIJy6FPy0LveWHyZb190dz9SJVQwgrWlYDqOhVo2wjgcMtGKw90seVi0CeGHyJTa-EucmiyZvLyNa8W88kAOFPYySp3xoLeV9Lo9T0mGADx9bUPoE4tFjVPO-3P3XJHoSRPllwVptAEtUa5l1CwoP45zuYEgqcFDVbgL4U5HUVOHLNuVvmcE_gdyYXSHfQqOBkWl93WLqePztU9gcGLSFxhibA",
  },
  {
    name: "الشركة السعودية للكهرباء Saudi Electricity Company",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS8No6xd02E4LO8tbUM8qCIp3xGEJX4m73yRWpfjQwQEjFM7X8DSe2-kerY6J1oNTkYhIXC9YFRt1eKHiiQgp57olVFZy_KIk-n_JrsWs6Elvqpk1ar1WQcV-HdYO-AsCB6P9Tw-4C0XcyUzeWgBh-2upL9tlFsgcWa38tvcLC0je4fLJpI0tZjpXpRbLQpMPwrq6pRhkuLXIhH1TUSn_cy6hzcmpK0jBrEr23n8Pmx_2JNCP84-RuvuQ0zsZAkAJ7Zw",
  },
  {
    name: "شركة المياه الوطنية NWC",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCynktlbcJ_UJCpjRVvG89kbmqrVNDdCJWsaXM5GLyTLz4TMANiFxMX5GA6wYfODpLOe52aKEIH7PE0W55cLJSBahXfy8ZGJ-Owfcyin33tWKhTW4fYZ2oi8OYgrpfHvy1cHPL_c7VZ_pqXZWsXtuRKC9-ZrR_-Y2p1FY_TsYh58zcy02HY3UIvIn-sXxLXv3rJIvjC7dsXVsuudbILnEOWQG900xN2BHfY6-gm_vAqiONYC1Cn23oyesc8735-RhwTdw",
  },
  {
    name: "غرف دبي Dubai Chambers",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIYA5_5hEb_rzp6XHwManIPw5yF-4AlY9bMF2c4zwq8HoXpUCyHm9YMjg9vY0qsz0-8ug1mK117i8Bhc6FZMQb3SKsb621Hv2WDBYA2B0G1PFWEv3kfRASc4wMwivZ5DAvQa_xHEffhJ1N5wmcoU3xzj6odOcyjyWRbW5XejTX8yfbq_R5-isNSL1mWEvW5li0sQ76594KzQZqU4TOOu6VZ32CrKHnWSOflaIhg-mtunhIu7NE1Ucyob1jhm3vwo2AeA",
  },
  {
    name: "المجدوعي Almajdouie",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd3y6KyLhu87fHgG_2n5JU4yRBFAxfCTRK6BXr_OyJsH3EP_sU3ZZTBqsIPMnIhsoE4xrWoO4VWQSD240sVQ6Ia7yArOF1ipfy9aNHOFEGobHSv3uk_MXE6hPbHy20ok-94Z5NeCCfMBRMXCNYYH7KvQOf-ZoBSjQls4LruA3Dvu_Lv_ekxWRhgMtK4RldckzCT6HowxAL7xUZ8FpYMX0v2jrH-TAFQtGdQazghcc7KYBZlb0wJVPtJvdZk2hg6sA8bA",
  },
  {
    name: "صدارة Sadara",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCE9Yp7uSEjWe4vqTKGXgMF1-ATMF96_KNic5ANfch__w0LAT_3XIr2o5WPdXathH1wWrwmbL-AVlpvNS2Rmnx0cVvIAqvaO5oGhlHs7VVNvl1IwTFf8x1B7vUZ-luJI-6Qvu7NNOaH6JJru_6k6JcXQG-ZLQDrrugmoOE-9dvBMT6ZY8EgrxpoSGcn0frtHJJofog-KdQw25v8HItolZ9LVnKwpNkbqzSLazuIXNkPGfLLPJojiGg0DwnNU15JLf3kqw",
  },
  {
    name: "هيترا Hetra",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBr32X78A0hNg9WxXBNXD0lT71hABYz5GJyOzWUQWhBs8jO21GnKW7VuYLxCsT2bGRSFLMGHt58YnIMUhupRu1sLE53naC8si0zQe6fIjJ6Yc0SjaHr9UE424pZ8GiqmF_MnZLvqDDCDRq2EIy8Sm9jr3DXAHbC-TQDQ9QclbA9YbgL2GMf4YFNQwRqcmq-PRExC9f4h0qrO0RtVX8S5lolRec9YerPWQtGgoaFoP8jtp2sNrmean0pz1rIlW62UxNCA",
    bgDark: true,
  },
  {
    name: "فروت لاند Fruit Land Co",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTUcpfxuGZcy5eTTK8cCvTGqJ3yYC8AC56yAf4lu5V4M7hAbAkjKNYSmiCOHBJ16TOTOwGnUoYuS4aTjUEaaRU_NW-ZnAgdZg8iSypPTJ79bpuc-dmy7Ch1uAIMd1PzIobFkO-0DsdTeiV634z2fX_uJ9AjA8HFk6_Vl3tCEYTNwjinNnaUtRRQRrvKfmmkGKSMGcjFIiUSXU9wbxf957b9SS6ImB5lA3zQBch_HwmlFZDlDNQRuZwN-x7BSsH7LpJ8A",
  },
  {
    name: "أسس العقارية Osuss",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEMbW0ErdQxmNOqSrK0kBnAWZ5F5BRAPRjJ0506qb8loSucpeuEZoUX3QSgm6StRL7Tb7jVQqoiAoEWukmYy764fqBSJoFOcNdPR_8-rmDY73cmYgLGkDb9Tan1O5gZxMOaBURU2heA57q0BPbVq_JkdTWMG3lBRuJa49MGuWH8nQocM7jZphC5QkfLuXWENHvolvNxoGQd0hvpLNH8Yed9TndXohHTzrxRt2ejY-SRa6npxwyAB0FR1Gv3oL3t3ZqSw",
    bgDark: true,
  },
];

export default function PartnersWall() {
  const scrollBoxRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollBoxRef.current) {
      scrollBoxRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollBoxRef.current) {
      scrollBoxRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section
      className="w-full bg-[#0D0204] text-white py-20 sm:py-24 border-t border-[#3A0C15] relative overflow-hidden"
      id="partners"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0509] border border-[#FF0A2B]/40 text-[#FF0A2B] text-xs font-bold mb-3 shadow-glow-red">
            <Handshake className="w-4 h-4 animate-pulse" />
            <span>شركاء المسيرة والنجاح</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            <span className="relative inline-block pb-2">
              عملاؤنا وشركاؤنا، نجاحنا المشترك
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF0A2B] origin-center rounded-full shadow-glow-red"
              />
            </span>
          </h2>
          <p className="text-[#C9A4A8] text-sm sm:text-base mt-3 leading-relaxed">
            نفتخر بشراكتنا الراسخة مع كبرى المنظمات والهيئات والشركات في مصر والسعودية والإمارات، مقدمين حلولاً رقمية وتسويقية تصنع الفارق.
          </p>
        </motion.div>

        {/* Controls Toolbar */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF0A2B] animate-ping" />
            <span className="text-xs font-semibold text-[#C9A4A8]">
              شريط الشركاء التفاعلي (مرر بالفأرة للتوقف)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              aria-label="السابق"
              className="w-9 h-9 rounded-xl bg-[#1A0509] border border-[#3A0C15] text-gray-300 hover:text-white hover:border-[#FF0A2B] flex items-center justify-center transition-colors"
              type="button"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              aria-label="التالي"
              className="w-9 h-9 rounded-xl bg-[#1A0509] border border-[#3A0C15] text-gray-300 hover:text-white hover:border-[#FF0A2B] flex items-center justify-center transition-colors"
              type="button"
            >
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Infinite Continuous Scrolling Track */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          ref={scrollBoxRef}
          className="relative w-full overflow-hidden rounded-2xl border border-[#3A0C15] bg-[#12030A]/60 py-6 shadow-2xl"
        >
          {/* Edge Gradients for Infinite Fade */}
          <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-[#12030A] via-[#12030A]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-[#12030A] via-[#12030A]/80 to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex items-center gap-5">
            {/* Set 1 */}
            {partners.map((partner, idx) => (
              <motion.div
                key={`p1-${idx}`}
                whileHover={{ scale: 1.08, y: -4, borderColor: "#FF0A2B" }}
                className={`w-44 sm:w-48 h-24 rounded-xl p-3 flex items-center justify-center border shadow-md transition-all flex-shrink-0 cursor-pointer ${
                  partner.bgDark
                    ? "bg-[#1A0509] border-[#3A0C15]"
                    : "bg-white border-white/20"
                }`}
              >
                <div className="relative w-full h-12">
                  <Image
                    alt={partner.name}
                    src={partner.logo}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
            {/* Set 2 for seamless loop */}
            {partners.map((partner, idx) => (
              <motion.div
                key={`p2-${idx}`}
                whileHover={{ scale: 1.08, y: -4, borderColor: "#FF0A2B" }}
                className={`w-44 sm:w-48 h-24 rounded-xl p-3 flex items-center justify-center border shadow-md transition-all flex-shrink-0 cursor-pointer ${
                  partner.bgDark
                    ? "bg-[#1A0509] border-[#3A0C15]"
                    : "bg-white border-white/20"
                }`}
              >
                <div className="relative w-full h-12">
                  <Image
                    alt={partner.name}
                    src={partner.logo}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
