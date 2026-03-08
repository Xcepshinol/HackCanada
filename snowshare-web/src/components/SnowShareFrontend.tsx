"use client";
import QuickRequestForm from './QuickRequestForm';
import NearbyRequests from './NearbyRequests';
import Tabs from './ui/Tabs';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';

export default function SnowShareFrontend() {
  const requests = [
    { id: 1, address: '123 Maple St.', details: 'Driveway + Sidewalk', price: '$20', distance: '0.8 km', urgent: true },
    { id: 2, address: '789 Pine Rd.', details: 'Driveway', price: '$25', distance: '1.4 km', urgent: false },
    { id: 3, address: '9261 Isle St.', details: 'Front Walkway', price: '$18', distance: '2.0 km', urgent: false },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // sync tab from URL query param
  useEffect(() => {
    const tabParam = searchParams?.get('tab') || 'request';
    setActiveTab(tabParam === 'browse' ? 1 : 0);
  }, [searchParams]);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    const tab = index === 1 ? 'browse' : 'request';
    // update URL to reflect selected tab
    router.push(`${pathname}?tab=${tab}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-slate-100 text-slate-800">
      <header className="border-b border-sky-100 bg-sky-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
              <span className="text-xl">❄️</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-sky-900">SnowShare</h1>
              <p className="text-sm text-slate-500">Community snow removal support</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-900 shadow-sm">Become a Helper</button>
            <button className="rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-700">Request Help</button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
          <div className="mx-auto max-w-4xl mb-8">
          <Tabs tabs={["Request Help", "Browse Jobs"]} active={activeTab} onChange={handleTabChange} />
        </div>

        <section className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm">
          <div className="bg-gradient-to-br from-sky-50 via-sky-100 to-white px-8 py-10">
            <div className="max-w-xl">
              <p className="mb-3 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700 shadow-sm">
                Winter support made simple
              </p>
              <h2 className="text-4xl font-bold leading-tight text-sky-950">
                Get help with snow removal from your local community
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-8 text-slate-600">
                SnowShare connects people needing snow cleared with nearby volunteers or paid helpers during heavy winter weather.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-sky-700">
                  Request Help
                </button>
                <button className="rounded-2xl border border-sky-200 bg-white px-6 py-3 text-base font-semibold text-sky-900 shadow-sm">
                  Become a Helper
                </button>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ['Submit a Request', 'Let us know what areas need clearing and how urgent it is.'],
                ['Get Matched', 'We’ll find a nearby helper available to assist you.'],
                ['Driveway Cleared', 'Track progress and get notified when the job is done.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-lg">✓</div>
                  <h3 className="text-lg font-semibold text-sky-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 px-8 py-8 md:grid-cols-[1fr_0.95fr]">
            {activeTab === 0 ? (
              <>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Quick Request</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Designed to be simple and accessible for seniors, families, and anyone needing urgent winter support.</p>
                  <div className="mt-6">
                    <div className="card">
                      <QuickRequestForm />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-3xl bg-sky-50 p-4">
                    <div className="flex h-full min-h-[420px] flex-col justify-between rounded-[28px] border border-sky-100 bg-gradient-to-b from-sky-100 to-white p-5 shadow-inner">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm">Voice-friendly</span>
                          <span className="text-2xl">🎙️</span>
                        </div>
                        <h4 className="mt-5 text-2xl font-bold text-sky-950">Describe your situation by voice</h4>
                        <p className="mt-3 text-sm leading-6 text-slate-600">Make requesting help easier for older adults or anyone who prefers speaking instead of typing.</p>
                      </div>
                      <div className="mt-6 rounded-3xl border border-white/80 bg-white/90 p-5 shadow-sm">
                        <p className="text-sm font-semibold text-slate-700">Example request</p>
                        <p className="mt-3 text-sm leading-6 text-slate-600">“My driveway and steps are covered in snow. I’m a senior and need this cleared as soon as possible.”</p>
                        <div className="mt-5 rounded-2xl bg-sky-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm">Start Voice Input</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="md:col-span-2">
                <NearbyRequests requests={requests} />
              </div>
            )}
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Nearby Requests</h2>
              <p className="mt-1 text-sm text-slate-500">Helpers can browse and accept snow removal jobs nearby.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                Sort by Distance
              </button>
              <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                Filter
              </button>
            </div>
          </div>

          <div className="grid gap-6 p-6">
            <NearbyRequests requests={requests} />
          </div>
        </section>
      </main>
    </div>
  );
}
