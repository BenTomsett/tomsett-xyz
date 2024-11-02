import React from "react";

export default function GradientIconText({icon, text, color}: { icon: string, text: string, color: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 bg-gradient-to-r from-${color}-600 to-${color}-400 bg-clip-text text-transparent`}>
      {text}
      <i className={icon}/>
    </span>
  )
}