"use client";

import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/app/blog/contact";
import SubmitButton from "@/app/submit-button";

// Trang Contact có form liên hệ với Server Actions + validation
// Cài đặt shadcn/ui thành công
export default function ContactPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const formAction = async (formData: FormData) => {
    setSubmitError("");
    const result = await submitContact(formData);
    
    if (result?.error) {
      setSubmitError(result.error);
    } else if (result?.success) {
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    formRef.current?.reset();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-400/20 rounded-full blur-[60px] -z-10"></div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Kết nối với mình</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Bạn có dự án cần hợp tác, hay đơn giản là muốn trò chuyện? Đừng ngại để lại tin nhắn nhé!
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        {isSuccess ? (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-[2rem] p-10 text-center shadow-lg shadow-emerald-100/50 dark:shadow-none animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-800 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner ring-4 ring-white dark:ring-slate-900">
              🎉
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Gửi thành công!</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Cảm ơn bạn đã liên hệ. Mình sẽ kiểm tra và phản hồi lại cho bạn trong thời gian sớm nhất.
            </p>
            <button onClick={handleReset} className="px-8 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 transition-all shadow-sm">
              Gửi tin nhắn khác
            </button>
          </div>
        ) : (
          <form ref={formRef} action={formAction} className="bg-white/80 backdrop-blur-xl dark:bg-slate-900/80 rounded-[2.5rem] shadow-2xl shadow-emerald-100/30 dark:shadow-none border border-slate-200/80 dark:border-slate-800 p-8 md:p-10 space-y-6">
            {submitError && (
              <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 font-medium">
                {submitError}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-700 dark:text-slate-300">Tên của bạn</Label>
              <Input id="name" name="name" required placeholder="VD: Mai Linh..." className="px-5 py-6 rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 shadow-inner text-base" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Địa chỉ Email</Label>
              <Input id="email" name="email" type="email" required placeholder="mailinh@example.com" className="px-5 py-6 rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 shadow-inner text-base" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-700 dark:text-slate-300">Nội dung tin nhắn</Label>
              <Textarea id="message" name="message" required placeholder="Hãy để lại lời nhắn nhé..." rows={5} className="px-5 py-4 rounded-2xl border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 shadow-inner resize-none text-base" />
            </div>
            <SubmitButton label="Gửi liên hệ" loadingLabel="Đang gửi đi..." />
          </form>
        )}
      </div>
    </div>
  );
}