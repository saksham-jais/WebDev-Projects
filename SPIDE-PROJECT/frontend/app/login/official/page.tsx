import { redirect } from "next/navigation";

export default function OfficialLoginRedirectPage() {
  redirect("/admin/login");
}
