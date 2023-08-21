import * as React from "react"
import { PageProps } from "gatsby"
import { Link } from "gatsby"

interface ContentAreaProps {
    children: React.ReactNode
}

const ContentArea: React.FC<ContentAreaProps> = ({children}) => {
  return (
    <div className="flex py-8 items-center justify-center bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white p-8 shadow-md">
                {children}
            </div>
        </div>
    </div>
  )
}

export default ContentArea
