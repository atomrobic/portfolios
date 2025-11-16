"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

// Highlight utility component
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "bg-emerald-100 px-1 py-0.5 font-bold text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500",
        className
      )}
    >
      {children}
    </span>
  );
};

// Sample cards data
const CARDS = [
  {
    id: 0,
    name: "John Doe",
    designation: "Senior Developer",
    content: (
      <p>
        This portfolio is <Highlight>absolutely stunning</Highlight>! The animations
        and design are top-notch. Would love to work together.
      </p>
    ),
  },
  {
    id: 1,
    name: "Jane Smith",
    designation: "Product Manager",
    content: (
      <p>
        Amazing work on the <Highlight>user experience</Highlight>. The attention
        to detail is impressive. Highly recommend!
      </p>
    ),
  },
  {
    id: 2,
    name: "Mike Johnson",
    designation: "Tech Lead",
    content: (
      <p>
        The <Highlight>code quality</Highlight> and performance optimization are
        excellent. Great collaboration and communication skills.
      </p>
    ),
  },
];

export default function CardStackDemo() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <CardStack items={CARDS} />
    </div>
  );
}

export { CARDS };