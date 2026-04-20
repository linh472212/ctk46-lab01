import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "./guestbook";

// Tạo API Routes cho Guestbook: GET, POST, DELETE hoạt động đúng
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limitParam = searchParams.get("limit");
  
  let entries = [...guestbookEntries].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (limitParam) {
    const limit = parseInt(limitParam, 10);
    if (!isNaN(limit) && limit > 0) {
      entries = entries.slice(0, limit);
    }
  }

  return NextResponse.json(entries);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || name.trim().length < 2 || name.trim().length > 50) {
      return NextResponse.json({ error: "Tên (name) phải từ 2 đến 50 ký tự." }, { status: 400 });
    }

    if (!message || message.trim().length < 1 || message.trim().length > 500) {
      return NextResponse.json({ error: "Lời nhắn (message) phải từ 1 đến 500 ký tự." }, { status: 400 });
    }

    const ONE_MINUTE = 60 * 1000;
    const now = Date.now();
    const isDuplicate = guestbookEntries.some((entry) => {
      const entryTime = new Date(entry.createdAt).getTime();
      return entry.name === name.trim() && 
             entry.message === message.trim() && 
             (now - entryTime < ONE_MINUTE);
    });

    if (isDuplicate) {
      return NextResponse.json({ error: "Bạn đang thao tác quá nhanh. Vui lòng thử lại sau 1 phút." }, { status: 429 });
    }

    const newEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    guestbookEntries.push(newEntry);

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Dữ liệu gửi lên không hợp lệ." }, { status: 400 });
  }
}