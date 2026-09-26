import React from 'react'

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-slate-800">
        <h1 className="text-3xl font-extrabold mb-6">Terms of Service</h1>
        <p className="mb-4 text-sm text-slate-500">Last Updated: September 26, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
          <p className="mb-4 text-slate-600">
            By accessing or using My Drive Gw, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">2. Description of Service</h2>
          <p className="mb-4 text-slate-600">
            My Drive Gw acts as a gateway interface connecting multiple Google Drive accounts. We provide features to upload, organize, and share files through a centralized dashboard using your connected Google Drive storage quota.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">3. User Responsibilities</h2>
          <p className="mb-4 text-slate-600">
            You are responsible for all activity that occurs under your account. You agree not to use the service for any illegal or unauthorized purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">4. Disclaimer of Warranties</h2>
          <p className="mb-4 text-slate-600">
            The service is provided "AS IS", without warranty of any kind. We do not guarantee uninterrupted access to the gateway or that the service will be error-free.
          </p>
        </section>
      </div>
    </div>
  )
}
