"use client";
import React from 'react';

interface TabsProps {
  tabs: string[];
  active?: number;
  onChange?: (index: number) => void;
}

export default function Tabs({ tabs, active = 0, onChange }: TabsProps) {
  return (
    <div className="flex items-center gap-2 bg-white/50 p-1 rounded-full shadow-sm">
      {tabs.map((t, i) => (
        <button
          key={t}
          onClick={() => onChange?.(i)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
            i === active
              ? 'bg-sky-600 text-white shadow'
              : 'text-slate-700 hover:bg-slate-100'
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
