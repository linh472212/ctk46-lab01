export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export let guestbookEntries: GuestbookEntry[] = [
  { id: "1", name: "Người dùng mẫu", message: "Xin chào, đây là lời nhắn đầu tiên!", createdAt: new Date().toISOString() }
];