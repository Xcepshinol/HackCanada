"use client";
import React, { useState } from 'react';

export default function QuickRequestForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now we'll just console.log; integrate API call later
    console.log('submit', { name, address, notes });
    alert('Request submitted (mock)');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
        placeholder="Full name"
      />
      <input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
        placeholder="Address"
      />

      <div>
        <p className="mb-2 text-sm font-semibold text-slate-700">Areas to clear</p>
        <div className="flex flex-wrap gap-2">
          {['Driveway', 'Sidewalk', 'Stairs', 'Walkway'].map((item, i) => (
            <button key={item} type="button" className={`rounded-full px-4 py-2 text-sm font-medium shadow-sm ${i === 0 ? 'bg-sky-600 text-white' : 'border border-slate-200 bg-white text-slate-700'}`}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold text-slate-700">Urgency</p>
        <div className="flex flex-wrap gap-2">
          {['Low', 'Medium', 'High', 'Emergency'].map((item, i) => (
            <button key={item} type="button" className={`rounded-full px-4 py-2 text-sm font-medium ${i === 2 ? 'bg-amber-100 text-amber-800' : i === 3 ? 'bg-rose-100 text-rose-800' : 'border border-slate-200 bg-white text-slate-700'}`}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={4}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
        placeholder="Additional notes"
      />

      <div className="flex items-center gap-3 text-sm text-slate-600">
        <input type="checkbox" className="h-4 w-4 rounded border-slate-300" defaultChecked />
        <span>I’m okay with volunteer help</span>
      </div>

      <button type="submit" className="w-full rounded-2xl bg-sky-600 px-5 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-sky-700">
        Submit Request
      </button>
    </form>
  );
}
