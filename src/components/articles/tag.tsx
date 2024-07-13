import React, { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <div className="flex items-center place-content-end">
      <span className="p-1 px-2 text-xs rounded-xl bg-zinc-300 text-zinc-950">
        {children}
      </span>
    </div>
  );
}
