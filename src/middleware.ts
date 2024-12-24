// export { auth as middleware } from "@/server/auth";

import { NextResponse } from "next/server";

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

export default function middleware() {
  return NextResponse.next();
}
