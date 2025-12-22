import React from "react";
import { X } from "lucide-react";

export default function PdfModal({ isOpen, onClose, pdfUrl }) {
  if (!isOpen) return null;

  return (
<div className="relative z-[10000] h-[90vh] w-[90vw] rounded-xl bg-white shadow-2xl">
      {/* Modal container */}
      <div className="relative h-[90vh] w-[90vw] rounded-xl bg-white shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black p-2 text-white hover:bg-red-600"
        >
          <X size={20} />
        </button>

        {/* PDF Viewer */}
        <iframe
          src={pdfUrl}
          title="Resume Viewer"
          className="h-full w-full rounded-xl"
        />
      </div>
    </div>
  );
}
