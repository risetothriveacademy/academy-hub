"use client";

import { useState } from "react";

const BRAND = {
  teal: "#0097B2",
  gold: "#DB910F",
};

interface WorkbookData {
  number: number;
  title: string;
  subtitle: string;
  scripture: {
    text: string;
    reference: string;
  };
  sections: {
    title: string;
    prompts: string[];
  }[];
  prayer: string;
}

export default function WorkbookClient({ workbook, slug }: { workbook: WorkbookData; slug: string }) {
  const [responses, setResponses] = useState<{ [key: string]: string }>({});

  const handleResponseChange = (sectionIndex: number, promptIndex: number, value: string) => {
    const key = `${sectionIndex}-${promptIndex}`;
    setResponses({ ...responses, [key]: value });
  };

  const handleSave = () => {
    // Save to localStorage (browser only - never sent to server)
    localStorage.setItem(`workbook-${slug}`, JSON.stringify(responses));

    // Show privacy-conscious confirmation
    alert("✅ Saved to your device only!\n\n📱 Your responses are stored privately on YOUR device.\n🔒 They are NEVER sent to our servers.\n💾 Tip: Click 'Download Backup' to keep a permanent copy.");
  };

  const handleDownload = () => {
    // Create downloadable text file
    let content = `${workbook.title}\n${"=".repeat(workbook.title.length)}\n\n`;
    content += `${workbook.subtitle}\n\n`;
    content += `Scripture: ${workbook.scripture.text}\n— ${workbook.scripture.reference}\n\n`;

    workbook.sections.forEach((section, sectionIndex) => {
      content += `\n${section.title}\n${"-".repeat(section.title.length)}\n\n`;
      section.prompts.forEach((prompt, promptIndex) => {
        const key = `${sectionIndex}-${promptIndex}`;
        content += `${promptIndex + 1}. ${prompt}\n\n`;
        content += `${responses[key] || "[No response yet]"}\n\n`;
      });
    });

    if (workbook.prayer) {
      content += `\nClosing Prayer\n--------------\n${workbook.prayer}\n`;
    }

    // Download as text file
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${slug}-workbook-responses.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          .print-header { margin-top: 0 !important; padding-top: 20px !important; }
          header, footer, nav { display: none !important; }
          textarea { border: 1px solid #ccc !important; background: white !important; color: black !important; }
        }
      `}} />

      <main className="min-h-screen bg-slate-950">
          {/* Header */}
          <div className="print-header bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800">
            <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Course Number Badge */}
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-lg"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.gold}, ${BRAND.teal})`,
              }}
            >
              {workbook.number}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
            {workbook.title}
          </h1>
          <p className="text-xl text-slate-300 text-center mb-8">
            {workbook.subtitle}
          </p>

          {/* Scripture Card */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl text-slate-200 italic leading-relaxed mb-4">
                "{workbook.scripture.text}"
              </p>
              <p className="text-lg font-bold" style={{ color: BRAND.teal }}>
                — {workbook.scripture.reference}
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Workbook Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {workbook.sections.length > 0 ? (
            <>
              {workbook.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="print-section mb-12">
                <h2
                  className="text-2xl font-bold mb-6"
                  style={{ color: BRAND.gold }}
                >
                  {section.title}
                </h2>

                <div className="space-y-8">
                  {section.prompts.map((prompt, promptIndex) => (
                    <div
                      key={promptIndex}
                      className="bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
                    >
                      <label className="block text-lg font-semibold text-slate-200 mb-4">
                        {promptIndex + 1}. {prompt}
                      </label>
                      <textarea
                        value={responses[`${sectionIndex}-${promptIndex}`] || ""}
                        onChange={(e) =>
                          handleResponseChange(sectionIndex, promptIndex, e.target.value)
                        }
                        rows={6}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="Write your response here..."
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Prayer Section */}
            {workbook.prayer && (
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8 mb-12">
                <h2
                  className="text-2xl font-bold mb-4 text-center"
                  style={{ color: BRAND.gold }}
                >
                  Closing Prayer
                </h2>
                <p className="text-lg text-slate-200 text-center italic leading-relaxed">
                  {workbook.prayer}
                </p>
              </div>
            )}

            {/* Privacy Notice */}
            <div className="no-print bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔒</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Your Privacy Matters</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Your workbook responses are stored <strong>only on your device</strong>.
                    We never see, store, or transmit your answers to our servers.
                    For permanent backup, download or print your completed workbook.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="no-print grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={handleSave}
                className="px-6 py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.gold})`,
                }}
              >
                💾 Save to Device
              </button>
              <button
                onClick={handleDownload}
                className="px-6 py-4 rounded-xl border-2 border-slate-700 bg-slate-900/60 font-bold text-white hover:bg-slate-800/60 transition-all"
              >
                📥 Download Backup
              </button>
              <button
                onClick={handlePrint}
                className="px-6 py-4 rounded-xl border-2 border-slate-700 bg-slate-900/60 font-bold text-white hover:bg-slate-800/60 transition-all"
              >
                🖨️ Print Workbook
              </button>
            </div>

            {/* Reassurance Footer - Always visible as students type */}
            <div className="no-print mt-12 pt-8 border-t border-slate-800">
              <div className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm rounded-xl p-6 text-center">
                <h4 className="text-lg font-bold text-white mb-4">
                  ✨ Your Responses Are Safe & Private
                </h4>
                <div className="max-w-2xl mx-auto space-y-2 text-sm text-slate-300">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400 font-bold">✅</span>
                    <span>Saved locally in your browser</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400 font-bold">✅</span>
                    <span>Never transmitted to our server</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400 font-bold">✅</span>
                    <span>Never stored in our database</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400 font-bold">✅</span>
                    <span>Can download/print anytime</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400 font-bold">✅</span>
                    <span>Fully HIPAA-conscious design</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-400 italic">
                  Write freely. Your healing journey is yours alone.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Workbook Coming Soon
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                We're crafting a beautiful, transformative workbook experience for this course.
              </p>
              <p className="text-slate-400">
                You'll be notified when it's ready!
              </p>
            </div>
          </div>
          )}
        </div>
      </main>
    </>
  );
}
