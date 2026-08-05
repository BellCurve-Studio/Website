"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  onOpenConsultation: () => void;
}

const ORBIT_VIEWBOX = 400;
const ORBIT_CENTER = ORBIT_VIEWBOX / 2;
const INNER_ORBIT_RADIUS = 108;

const ORBIT_LAYERS = [
  { r: 182, dash: "2 8", stroke: "rgba(23,35,45,0.14)", duration: 48, direction: 1, nodes: [{ angle: 30 }, { angle: 210 }] },
  { r: 142, dash: "4 7", stroke: "rgba(23,35,45,0.22)", duration: 36, direction: -1, nodes: [{ angle: 120 }, { angle: 300 }] },
  { r: INNER_ORBIT_RADIUS, dash: "1 6", stroke: "rgba(23,35,45,0.28)", duration: 28, direction: 1, nodes: [{ angle: 60 }, { angle: 180 }, { angle: 330 }] },
];

function HeroOrbitSystem() {
  return (
    <svg
      className="hero-orbit-svg"
      viewBox={`0 0 ${ORBIT_VIEWBOX} ${ORBIT_VIEWBOX}`}
      fill="none"
      aria-hidden="true"
    >
      {ORBIT_LAYERS.map((layer, i) => (
        <g
          key={i}
          className={`hero-orbit-layer ${layer.direction === 1 ? "hero-orbit-layer-forward" : "hero-orbit-layer-reverse"}`}
          style={{ animationDuration: `${layer.duration}s` }}
        >
          <circle
            cx={ORBIT_CENTER}
            cy={ORBIT_CENTER}
            r={layer.r}
            stroke={layer.stroke}
            strokeWidth="1.5"
            strokeDasharray={layer.dash}
          />
          {layer.nodes.map((node, j) => {
            const rad = (node.angle * Math.PI) / 180;
            const nx = ORBIT_CENTER + layer.r * Math.cos(rad);
            const ny = ORBIT_CENTER + layer.r * Math.sin(rad);
            return (
              <circle
                key={j}
                cx={nx}
                cy={ny}
                r="5"
                fill="#f4efe5"
                stroke="rgba(23,35,45,0.42)"
                strokeWidth="2"
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const logoSize = `${((INNER_ORBIT_RADIUS * 2) / ORBIT_VIEWBOX) * 100 * 0.92}%`;

  return (
    <section className="hero-studio relative overflow-hidden bg-[#f4efe5] pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <div className="hero-studio-grid grid items-center gap-10 pb-16 pt-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-8 lg:pb-24 lg:pt-14">
          <div className="hero-copy relative z-10">
            {/* Giant Editorial Title matching Screenshot */}
            <h1 className="hero-studio-title max-w-4xl font-editorial-serif text-[4rem] leading-[.85] tracking-[-.055em] text-[#17232d] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7rem] xl:text-[8rem]">
              Build beyond<br />
              <span className="italic font-normal">
                the expected
                <span className="inline-block text-[#ed542d] not-italic font-sans ml-0.5 text-[0.85em] leading-none">.</span>
              </span>
            </h1>

            {/* Subtitle Paragraph matching Screenshot */}
            <p className="hero-copy-intro mt-8 max-w-2xl text-lg font-medium leading-[1.55] text-[#40505a] sm:text-xl lg:text-2xl">
              We partner with ambitious teams to design, build and scale digital products that make an impact.
            </p>

            {/* Action Buttons matching Screenshot */}
            <div className="hero-copy-actions mt-10 flex flex-wrap items-center gap-x-7 gap-y-5 sm:mt-12">
              <button
                onClick={onOpenConsultation}
                className="hero-primary-btn group relative inline-flex items-center gap-3.5 rounded-full bg-[#17232d] px-6 py-3.5 text-xs font-bold uppercase tracking-[.14em] text-[#fffdf8] shadow-[4px_4px_0_#ffbd5f] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#17232d] hover:shadow-[6px_6px_0_#ed542d]"
              >
                <span>View Our Work</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#ed542d] text-white transition-transform duration-200 group-hover:scale-110">
                  <ChevronRight className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                </span>
              </button>

              <a
                href="#services"
                className="hero-secondary-btn group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.14em] text-[#17232d] transition-colors duration-200 hover:text-[#ed542d]"
              >
                <span>Our Services</span>
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#ed542d] text-white transition-transform duration-200 group-hover:translate-x-1">
                  <ChevronRight className="h-4 w-4 stroke-[2.5]" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          {/* Right side orbit visual */}
          <div className="hero-orbit-stage relative mx-auto aspect-square w-full max-w-[510px] lg:ml-auto">
            <div className="hero-orbit-zoom">
              <HeroOrbitSystem />
              <div className="hero-logo-frame" style={{ width: logoSize, height: logoSize }}>
                <Image
                  src="/Bellcurve.png"
                  alt="BellCurve monogram"
                  width={1280}
                  height={1280}
                  priority
                  sizes="(max-width: 1024px) 80vw, 510px"
                  className="hero-logo-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom studio ribbon */}
      <div className="border-t border-[#17232d]/20 bg-[#17232d] text-[#fffdf8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="font-code-mono text-[10px] font-black uppercase tracking-[.16em] text-[#aeb9c2]">Built for ambitious teams</p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm font-bold text-[#fffdf8]/90 sm:text-base">
            <span>Founders</span><span>Growing businesses</span><span>Product teams</span><span>Transformation leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
}
