"use client";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
import { HTMLAttributes } from "react";

const Button = (
  props: {
    text?: string;
    href: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const { text, href } = props;
  const router = useTransitionRouter();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        router.push(href, {
          onTransitionReady: pageAnimation,
        });
      }}
    >
      <div className="group cursor-pointer relative overflow-hidden [perspective:800px] text-white flex items-center justify-center">
        <p
          className="transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)] 
              group-hover:[transform:rotateX(90deg)] group-hover:opacity-0 [transform-origin:top_center]"
        >
          {text}
        </p>
        <p
          className="font-cormorant-sans italic absolute transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]
               opacity-0 group-hover:opacity-100 group-hover:[transform:rotateX(0deg)_translateY(0)] [transform:rotateX(-90deg)_translateY(9px)] [transform-origin:bottom_center]"
        >
          {text}
        </p>
      </div>
    </Link>
  );
};
const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default Button;
