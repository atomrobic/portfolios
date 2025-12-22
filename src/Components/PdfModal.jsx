import React, { useState, useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import ReactDOM from "react-dom";

export default function PdfModal({ isOpen, onClose, pdfUrl }) {
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const checkMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    setIsMobile(checkMobile);
  }, []);

  const handleOpenExternal = () => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownload = async () => {
    try {
      setLoading(true);
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setLoading(false);
    } catch (err) {
      console.error("Download failed:", err);
      setError(true);
      setLoading(false);
    }
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
      {/* Modal container */}
      <div className="relative h-[90vh] w-full max-w-4xl rounded-xl bg-white shadow-2xl flex flex-col overflow-hidden">
        {/* Header with controls */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4 rounded-t-xl flex-shrink-0">
          <h2 className="text-lg font-semibold text-gray-800">Resume</h2>
          <div className="flex gap-2">
            <button
              onClick={handleOpenExternal}
              className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 transition-colors"
              title="Open in new tab (best for mobile)"
            >
              <ExternalLink size={20} />
            </button>
            {!isMobile && (
              <button
                onClick={handleDownload}
                disabled={loading}
                className="rounded-full bg-green-500 p-2 text-white hover:bg-green-600 transition-colors disabled:opacity-50"
                title="Download PDF"
              >
                <Download size={20} />
              </button>
            )}
            <button
              onClick={onClose}
              className="rounded-full bg-black p-2 text-white hover:bg-red-600 transition-colors"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Container */}
        <div className="flex-1 overflow-hidden bg-gray-100 relative">
          {loading && (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-gray-600">Loading PDF...</p>
              </div>
            </div>
          )}

          {error ? (
            <div className="flex h-full items-center justify-center flex-col gap-4">
              <div className="text-center">
                <p className="text-gray-600 mb-4">⚠️ Cannot load PDF in viewer</p>
                <p className="text-sm text-gray-500 mb-4">Use the Open button to view in a new tab</p>
                <button
                  onClick={handleOpenExternal}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Open in New Tab
                </button>
              </div>
            </div>
          ) : (
            <iframe
              src={pdfUrl}
              title="Resume Viewer"
              className="h-full w-full border-none"
              onLoad={() => setLoading(false)}
              onError={() => {
                setError(true);
                setLoading(false);
              }}
              allow="fullscreen"
            />
          )}
        </div>

        {/* Mobile notice */}
        {isMobile && !error && (
          <div className="border-t border-gray-200 bg-blue-50 p-3 text-center text-sm text-blue-700 rounded-b-xl flex-shrink-0">
            💡 For best experience on mobile, tap the <ExternalLink size={16} className="inline mx-1" /> button to open in fullscreen
          </div>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}