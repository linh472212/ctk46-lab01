"use server";

import { z } from "zod";

// Trang Contact có form liên hệ với Server Actions + validation
const contactSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Địa chỉ email không hợp lệ"),
  message: z.string().min(5, "Nội dung quá ngắn (ít nhất 5 ký tự)"),
});

export async function submitContact(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { success: true };
}