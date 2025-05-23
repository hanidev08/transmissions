"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { data } from "@/data";
import Link from "next/link";

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

interface State {
  startX: number;
  scrollLeft: number;
  isDragging: boolean;
  velocity: number;
  lastX: number;
  momentumID: number;
  translateX?: number;
  clickPrevented: boolean;
}

function App() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const state = useRef<State>({
    startX: 0,
    scrollLeft: 0,
    isDragging: false,
    velocity: 0,
    lastX: 0,
    momentumID: 0,
    translateX: 0,
    clickPrevented: false,
  });

  const [grabbing, setGrabbing] = useState(false);

  const onPointerDown = (e: PointerEvent) => {
    cancelAnimationFrame(state.current.momentumID);
    state.current.isDragging = true;
    setGrabbing(true);
    state.current.startX = e.pageX;
    state.current.lastX = e.pageX;
    state.current.scrollLeft = state.current.translateX || 0;
    state.current.clickPrevented = false;
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!state.current.isDragging) return;
    const dx = e.pageX - state.current.startX;
    if (!sliderRef.current) return;
    const maxScroll = -(
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    );
    const nextX = clamp(state.current.scrollLeft + dx, maxScroll, 0);

    state.current.velocity = e.pageX - state.current.lastX;
    state.current.lastX = e.pageX;
    state.current.translateX = nextX;

    if (Math.abs(dx) > 5) {
      state.current.clickPrevented = true; // ✅ تم السحب، لا تفتح الرابط
    }

    sliderRef.current.style.transform = `translate3d(${nextX}px, 0, 0)`;
  };

  const onPointerUp = () => {
    state.current.isDragging = false;
    setGrabbing(false);
    state.current.velocity *= 1.5;
    startMomentum();
  };

  const startMomentum = () => {
    const step = () => {
      state.current.velocity *= 0.95;
      if (Math.abs(state.current.velocity) < 0.3) return;

      if (!sliderRef.current) return;
      const maxScroll = -(
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      );
      state.current.translateX = clamp(
        (state.current.translateX || 0) + state.current.velocity,
        maxScroll,
        0
      );

      sliderRef.current.style.transform = `translate3d(${state.current.translateX}px, 0, 0)`;
      state.current.momentumID = requestAnimationFrame(step);
    };
    step();
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("grabbing", grabbing);
  }, [grabbing]);

  return (
    <div
      ref={sliderRef}
      className={`flex h-[calc(100vh-56px)] lg:h-[calc(100vh-64px)] w-full items-center select-none touch-none transition-transform duration-75 ease-out ${
        grabbing ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ transform: "translate3d(0,0,0)" }}
    >
      {data.map((item, i) => (
        <div
          key={i}
          className=" flex items-center flex-col  min-w-[100vw] lg:min-w-[30vw]"
        >
          <div className="relative w-[50%] pt-[40%] lg:pt-[70%] cursor-pointer">
            <Link
              href={`/portfolio/${item.slug}`}
              onClick={(e) => {
                if (state.current.clickPrevented) {
                  e.preventDefault(); // ✅ لا تفتح الرابط عند السحب
                }
              }}
              onDragStart={(e) => e.preventDefault()} // 🚫 منع سحب الصورة
            >
              <Image
                src={item.url}
                alt={`Image ${i}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="50vw"
                draggable={false}
              />
            </Link>
          </div>
          <div className=" text-center mt-10 uppercase font-medium text-xl">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
