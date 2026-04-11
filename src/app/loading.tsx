import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center">

      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 rounded-full border border-gray-200" />
        <Loader2 className="w-8 h-8 text-gray-700 animate-spin" />
      </div>

      {/* Text */}
      <p className="mt-6 text-gray-600 text-sm tracking-wide">
        Đang tải trải nghiệm của bạn...
      </p>

      {/* Sub text (optional SaaS feel) */}
      <span className="mt-2 text-xs text-gray-400">
        Vui lòng chờ trong giây lát
      </span>

    </div>
  )
}