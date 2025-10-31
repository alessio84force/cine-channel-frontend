"use client";
export default function LegalHTML({ html }:{ html:string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
