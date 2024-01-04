"use client"
import * as React from "react"

const Redirect = ({ url }: { url: string }) => {
  React.useEffect(() => {
    window.location.href = url
  }, [])

  return null
}

export default Redirect
