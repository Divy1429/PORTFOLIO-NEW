import type { Metadata } from "next";
import ResumeView from "@/components/ResumeView";

export const metadata: Metadata = {
  title: "Resume — Divy Patel (Patel Divy Ramchandrabhai)",
  description:
    "Official Curriculum Vitae & Resume of Patel Divy Ramchandrabhai — Full Stack Web Developer & Software Engineer.",
};

export default function ResumePage() {
  return <ResumeView />;
}
