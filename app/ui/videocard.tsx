import * as React from "react"
import Image from "next/image"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface VideoCardProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export function VideoCard({ title, description, thumbnailUrl, videoUrl }: VideoCardProps) {
  return (
    <Card className="w-[350px] transition-all duration-300 hover:shadow-lg hover:border-gray-300">
      <a 
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative">
          <Image 
            src={thumbnailUrl} 
            alt={`${title} thumbnail`}
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-white" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="">{description}</CardDescription>
        </CardHeader>
      </a>
    </Card>
  )
}
