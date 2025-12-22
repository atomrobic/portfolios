import React, { useState, useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import ReactDOM from "react-dom";

export default function PdfModal({ isOpen, onClose, pdfUrl }) {
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    setIsMobile(checkMobile);
  }, []);

  if (!isOpen || !mounted) return null;

  const handleOpenExternal = () => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  const handleDownload = async () => {
    try {
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
    } catch (err) {
      setError(true);
      console.error("Download failed:", err);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
      {/* Modal container */}
      <div className="relative h-[90vh] w-full max-w-4xl rounded-xl bg-white shadow-2xl flex flex-col">
        {/* Header with controls */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 p-4 rounded-t-xl">
          <h2 className="text-lg font-semibold text-gray-800">Resume</h2>
          <div className="flex gap-2">
            {isMobile && (
              <>
                <button
                  onClick={handleOpenExternal}
                  className="rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink size={20} />
                </button>
                <button
                  onClick={handleDownload}
                  className="rounded-full bg-green-500 p-2 text-white hover:bg-green-600 transition-colors"
                  title="Download PDF"
                >
                  <Download size={20} />
                </button>
              </>
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

        {/* PDF Viewer */}
        <div className="flex-1 overflow-auto bg-gray-100">
          {error ? (
            <div className="flex h-full items-center justify-center flex-col gap-4">
              <div className="text-center">
                <p className="text-gray-600 mb-4">Failed to load PDF</p>
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
              onError={() => setError(true)}
            />
          )}
        </div>

        {/* Mobile notice */}
        {isMobile && (
          <div className="border-t border-gray-200 bg-blue-50 p-3 text-center text-sm text-blue-700 rounded-b-xl">
            💡 On mobile? Use the Open button to view in fullscreen, or Download to save locally.
          </div>
        )}
      </div>
    </div>
  );

  // Use Portal to render at body level, bypassing parent z-index issues
  return ReactDOM.createPortal(modalContent, document.body);
}