"use client"

import { AlertCircle, X } from "lucide-react"
import { useEffect } from "react"

interface ErrorToastProps {
  message: string
  onClose: () => void
}

export default function ErrorToast({ message, onClose }: ErrorToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className="fixed top-4 right-4 flex items-center gap-3 p-4 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 z-50"
      style={{ backgroundColor: "#FFFFFF", borderLeft: "4px solid #016B61" }}
    >
      <AlertCircle size={20} style={{ color: "#016B61" }} />
      <p className="text-sm" style={{ color: "#2A2A2A" }}>
        {message}
      </p>
      <button onClick={onClose} className="hover:opacity-70 transition-opacity ml-2">
        <X size={18} style={{ color: "#70B2B2" }} />
      </button>
    </div>
  )
}
