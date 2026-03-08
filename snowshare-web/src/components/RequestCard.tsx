"use client";
import React from 'react';

interface RequestCardProps {
  request: {
    id: number | string;
    address: string;
    details?: string;
    price?: string;
    distance?: string;
    urgent?: boolean;
  };
}

export default function RequestCard({ request }: RequestCardProps) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-slate-900">{request.address}</h3>
            {request.urgent && (
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">Urgent</span>
            )}
          </div>
          {request.details && <p className="mt-1 text-sm text-slate-500">{request.details}</p>}
          {request.distance && <p className="mt-4 text-sm font-medium text-slate-600">{request.distance}</p>}
        </div>
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-lg font-bold text-emerald-800">{request.price}</span>
      </div>
      <button className="mt-5 w-full rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-700">
        Accept Request
      </button>
    </div>
  );
}
