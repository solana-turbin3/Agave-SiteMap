import * as React from "react";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TwitterCardProps {
  name: string;
  handle: string;
  avatarUrl: string;
  profileUrl: string;
}

export function TwitterCard({
  name,
  handle,
  avatarUrl,
  profileUrl,
}: TwitterCardProps) {
  return (
    <Card className="w-[350px] transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
      <a
        href={profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="h-12 w-12 rounded-full"
            width={48}
            height={48}
          />
          <div className="flex flex-col">
            <CardTitle className="text-base">{name}</CardTitle>
            <CardDescription>@{handle}</CardDescription>
          </div>
        </CardHeader>
      </a>
    </Card>
  );
}
