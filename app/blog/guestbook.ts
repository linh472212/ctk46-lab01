"use server";

import { z } from "zod";
import { guestbookEntries } from "@/types/guestbook";

const guestbookSchema = z.object({
  name: z.string().min(2, "Tên phải từ 2 đến 50 ký tự").max(50, "Tên tối đa 50 ký tự"),
  message: z.string().min(1, "Lời nhắn không được để trống").max(500, "Lời nhắn tối đa 500 ký tự"),
});

// Form Guestbook sử dụng Server Actions + Zod validation
export async function addGuestbookEntry(formData: FormData) {
  const validatedFields = guestbookSchema.safeParse({
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  const { name, message } = validatedFields.data;
  const now = Date.now();
  const ONE_MINUTE = 60 * 1000;

  const isDuplicate = guestbookEntries.some((entry) => {
    return entry.name === name.trim() && entry.message === message.trim() && (now - new Date(entry.createdAt).getTime() < ONE_MINUTE);
  });

  if (isDuplicate) return { error: "Bạn thao tác quá nhanh. Vui lòng thử lại sau 1 phút." };

  const newEntry = {
    id: Date.now().toString(),
    name: name.trim(),
    message: message.trim(),
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.push(newEntry);
  return { success: true };
}