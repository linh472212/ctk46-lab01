"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  label: string;
  loadingLabel: string;
}

export default function SubmitButton({ label, loadingLabel }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg" className="w-full py-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
    >
      {pending ? loadingLabel : label}
    </Button>
  );
}