import React from "react"
import Redirect from "@/components/Redirect"

export async function generateMetadata() {
  return {
    openGraph: {
      title: "Me contrate",
      description: "Clique aqui e veja se é capaz de não me contratar!",
      siteName: "Me contrate",
      images: [{ url: `/choose.png` }],
      locale: "pt_BR",
      type: "website",
    },
  }
}

export default function Home() {
  return <Redirect url={`https://github.com/kennedysmartins/me-contrate`} />
}
