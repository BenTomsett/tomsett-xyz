'use client';

import React from "react";

export default function Pill({text, icon, scrollToId}: {text: string, icon: string, scrollToId: string}) {
  return (
    <a
        href={`#${scrollToId}`}
        className="relative z-0 flex size-min flex-row flex-nowrap content-start items-start justify-center gap-2.5 overflow-hidden text-nowrap rounded-full border border-green-600 bg-green-500/20 p-2 px-4 text-sm text-white backdrop-blur-sm">
        {icon && <i className={icon} /> }
        <span className="underline">
          {text}
        </span>
      </a>
    )
}