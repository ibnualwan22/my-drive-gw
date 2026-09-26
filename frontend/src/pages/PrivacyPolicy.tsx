export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-slate-800">
        <h1 className="text-3xl font-extrabold mb-6">Privacy Policy</h1>
        <p className="mb-4 text-sm text-slate-500">Last Updated: September 26, 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
          <p className="mb-4 text-slate-600">
            Welcome to My Drive Gw ("we", "our", or "us"). This Privacy Policy explains how we collect, use, and protect your information when you use our storage gateway application.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">2. Google Drive API Usage</h2>
          <p className="mb-4 text-slate-600">
            My Drive Gw uses the Google Drive API (`https://www.googleapis.com/auth/drive`) to provide core functionality. Specifically, we request full drive access to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
            <li>Connect your Google Drive accounts to our platform as a storage backend.</li>
            <li>Upload files directly from our platform into a dedicated `mydrivegw` folder in your Google Drive.</li>
            <li>Read, modify, and delete files that are stored or synced within the app's gateway.</li>
          </ul>
          <p className="font-semibold text-slate-700">
            My Drive Gw's use and transfer to any other app of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">3. Data Collection and Storage</h2>
          <p className="mb-4 text-slate-600">
            We store basic user profile data (email, name) and metadata of the files you upload (filename, size, type). The actual file contents are not stored on our servers; they are streamed directly to your connected Google Drive storage. We do not sell or share your data with third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-3">4. Security</h2>
          <p className="mb-4 text-slate-600">
            We implement industry-standard encryption protocols to protect your OAuth tokens and session data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">5. Contact</h2>
          <p className="text-slate-600">
            If you have questions about this privacy policy, please contact us.
          </p>
        </section>
      </div>
    </div>
  )
}
