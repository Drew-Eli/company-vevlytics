function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <span className="text-xl font-bold tracking-tight">
          <span className="text-indigo-400">Vev</span>lytics
        </span>
        <a
          href="#waitlist"
          className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-semibold px-4 py-2 rounded-full"
        >
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section className="text-center px-6 pt-24 pb-20 max-w-4xl mx-auto">
        <div className="inline-block bg-indigo-950 text-indigo-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 border border-indigo-800">
          Now accepting early access
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Your AI conversations{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            are worth money.
          </span>
          <br />
          Start getting paid.
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Vevlytics is the Nielsen rating system for AI chats. Install our Chrome
          extension, choose exactly what data you share, and earn every time
          researchers and companies use your insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#waitlist"
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-indigo-900/50"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="border border-gray-700 hover:border-gray-500 transition-colors text-gray-300 font-semibold px-8 py-4 rounded-full text-lg"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-gray-900/50 px-6 py-20">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="text-red-400 text-3xl mb-4">✗</div>
            <h3 className="text-xl font-bold mb-3 text-red-300">The problem</h3>
            <p className="text-gray-400 leading-relaxed">
              Every question you ask ChatGPT, Claude, or Gemini trains their
              models and feeds their analytics. AI companies generate billions in
              value from your conversations. You see exactly{" "}
              <span className="text-white font-semibold">$0</span> of it.
            </p>
          </div>
          <div className="bg-gray-900 border border-indigo-900/50 rounded-2xl p-8">
            <div className="text-indigo-400 text-3xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-3 text-indigo-300">The solution</h3>
            <p className="text-gray-400 leading-relaxed">
              Vevlytics puts you in control. We aggregate your anonymized
              conversation data only for{" "}
              <em>the specific use cases you approve</em> — in plain English —
              and share the revenue when that data is accessed through our API.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-16">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Install the extension",
              body: "Add the Vevlytics Chrome extension. It quietly captures your AI chats across ChatGPT, Claude, Gemini, and more — all locally.",
            },
            {
              step: "02",
              title: "Choose your permissions",
              body: 'Approve data use cases in plain language: "Pet health questions", "Coding help", "Travel planning". You stay in full control.',
            },
            {
              step: "03",
              title: "Earn from your data",
              body: "Researchers and companies query aggregated insights via our API. You earn a share of every query that includes your approved data.",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex flex-col">
              <div className="text-indigo-500 font-black text-5xl mb-4 opacity-60">
                {step}
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-gray-900/50 px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
            Why Vevlytics
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto">
            Built for users who believe their data should work for them.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🔒",
                title: "Privacy by design",
                body: "Your raw conversations never leave your device. Only your approved, anonymized insights are shared.",
              },
              {
                icon: "💸",
                title: "Real earnings",
                body: "Transparent revenue sharing. Track your earnings in a real-time dashboard as demand for your insights grows.",
              },
              {
                icon: "🎛️",
                title: "Granular control",
                body: "Enable or disable any data category at any time. Change your mind — your history is yours to keep or delete.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-indigo-800/60 transition-colors"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Waitlist */}
      <section
        id="waitlist"
        className="px-6 py-28 text-center max-w-2xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
          Be first to get paid for{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
            your AI data.
          </span>
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          We're opening early access to a select group of users. Join the
          waitlist — no spam, just your invite when we're ready.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="you@example.com"
            className="bg-gray-900 border border-gray-700 focus:border-indigo-500 outline-none text-white placeholder-gray-500 px-5 py-4 rounded-full flex-1 max-w-xs text-sm"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-bold px-7 py-4 rounded-full text-sm shadow-lg shadow-indigo-900/50 whitespace-nowrap"
          >
            Join Waitlist
          </button>
        </form>
        <p className="text-gray-600 text-xs mt-5">
          No credit card. No commitment. Unsubscribe anytime.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-gray-600 text-sm">
        <span className="text-indigo-400 font-bold">Vev</span>lytics &copy;{" "}
        {new Date().getFullYear()} — Your AI data. Your rules. Your earnings.
      </footer>

    </div>
  );
}

export default App;
