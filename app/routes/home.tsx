// export default function Home() {
//   return (
//     <main className="flex h-screen items-center justify-center">
//       <h1 className="font-medium text-3xl tracking-tight">
//         Woo, nothing here!
//       </h1>
//     </main>
//   );
// }

import { redirect } from "react-router";

export const loader = () => redirect("/dashboard");

export default function Home() {
  return null;
}
