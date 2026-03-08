"use client";
import React, { useState } from 'react';
import Tabs from './ui/Tabs';
import RequestCard from './RequestCard';

interface NearbyRequestsProps {
  requests: Array<any>;
}

export default function NearbyRequests({ requests }: NearbyRequestsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-6 p-6 xl:grid-cols-[1.1fr_0.9fr]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Live helper map</h3>
        <Tabs tabs={["Map", "List"]} active={active} onChange={setActive} />
      </div>

      {active === 0 ? (
        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
          <div className="relative h-[420px] overflow-hidden rounded-[24px] border border-white bg-gradient-to-br from-slate-200 via-slate-100 to-sky-100">
            <div className="absolute inset-0 opacity-60" style={{backgroundImage:'linear-gradient(to right, rgba(255,255,255,0.65) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.65) 1px, transparent 1px)', backgroundSize:'44px 44px'}} />
            <div className="absolute left-10 top-12 h-28 w-56 rounded-3xl bg-white/70 blur-sm" />
            <div className="absolute right-10 top-20 h-36 w-40 rounded-full bg-sky-200/60 blur-2xl" />
            <div className="absolute left-8 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">Map placeholder</div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((r: any) => (
            <RequestCard key={r.id} request={r} />
          ))}
        </div>
      )}

      {/* Right column: short list and helper note when on Map view */}
      <div className="space-y-4">
        {active === 0 ? (
          // show some quick list items when map is active
          requests.slice(0, 3).map((r: any) => (
            <div key={r.id} className="rounded-3xl border border-slate-100 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">{r.address}</p>
                  <p className="text-sm text-slate-500">{r.details}</p>
                </div>
                <p className="text-lg font-bold text-emerald-800">{r.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-3xl bg-sky-50 p-5">
            <p className="text-sm font-semibold text-sky-900">Helper note</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">SnowShare highlights urgent jobs first so vulnerable users can be matched with nearby help more quickly during winter storms.</p>
          </div>
        )}
      </div>
    </div>
  );
}
