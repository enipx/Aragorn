/* eslint-disable @next/next/no-img-element */
"use client";

import { CheckIcon, CopyIcon, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard, useShare } from "@/hooks";
import { ShareTextType } from "@/types";
import { appUrl } from "@/lib/utils";
import { AlertDialogCancel } from "../ui/alert-dialog";

export interface ShareModalProps {
  link?: string;
  message?: string;
}

export const ShareModalContent = ({ link = appUrl, message }: ShareModalProps) => {
  const [copied, copyToClipboard] = useCopyToClipboard({ timeout: 3000 });
  const { share } = useShare({ message });

  const shareLinks: {
    name: string;
    icon?: React.ReactNode;
    iconUrl?: string;
    type: ShareTextType;
  }[] = [
    {
      name: "X.com",
      iconUrl:
        "https://res.cloudinary.com/dmsic9qmj/image/upload/v1709753616/gandalf/bounty/x-twitter_dirxbo.png",
      type: "twitter",
    },
    {
      name: "Warpcast",
      iconUrl:
        "https://res.cloudinary.com/dmsic9qmj/image/upload/v1709753616/gandalf/bounty/warpcast_ozmcuj.png",
      type: "warpcast",
    },
    {
      name: "Telegram",
      iconUrl:
        "https://res.cloudinary.com/dmsic9qmj/image/upload/v1709753616/gandalf/bounty/telegram_v8zt6q.png",
      type: "telegram",
    },
    {
      name: "Copy link",
      icon: copied ? (
        <CheckIcon strokeWidth={1.2} className="w-8 md:w-5" />
      ) : (
        <CopyIcon strokeWidth={1.2} className="w-8 md:w-5" />
      ),
      type: "copy",
    },
  ];

  const onShareClick = (type: ShareTextType) => {
    if (type === "copy") {
      copyToClipboard(link);
    } else {
      share({ type, url: link });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <p className="font-medium">Share to:</p>
        <AlertDialogCancel className="border-none outline-none">
            <X className="w-4 h-4" />
        </AlertDialogCancel>
      </div>
      <div className="pt-4 flex flex-wrap gap-x-12 md:gap-x-10 gap-y-3 overflow-hidden justify-between">
        {shareLinks.map((share, index) => {
          return (
            <Button
              key={`share-${index}-${index}`}
              variant="link"
              className=" flex-col items-center justify-center text-xs gap-y-1.5 h-auto px-0"
              onClick={() => onShareClick(share.type)}
            >
              <span className="flex-shrink-0 flex justify-center">
                {share.icon || (
                  <img
                    className="w-8 md:w-6 object-fill"
                    src={share.iconUrl}
                    alt={share.name}
                  />
                )}
              </span>
              {share.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
