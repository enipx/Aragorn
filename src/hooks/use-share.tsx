import { ShareTextType } from "@/types";

import { useCopyToClipboard } from "./use-clipboard";
import { appUrl } from "@/lib/utils";

type UseShareOptionType = {
  message?: string;
};

export const useShare = (options: UseShareOptionType) => {
  const [, copyToClipboard] = useCopyToClipboard({});

  const share = ({ url, type }: { type: ShareTextType; url: string }) => {
    const shareText = encodeURIComponent(
      options?.message ||
        `Dive Into Your Digital Trails With Aragorn ${url || appUrl}`,
    );

    if (type === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${shareText}`,
        "_blank",
      );
    } else if (type === "warpcast") {
      window.open(`https://warpcast.com/~/compose?text=${shareText}`, "_blank");
    } else if (type === "telegram") {
      window.open(`https://t.me/share/url?url=${shareText}`, "_blank");
    } else if (type === "discord") {
      copyToClipboard(shareText);
      window.open(`https://discord.com/channels/@me`, "_blank");
    }
  };

  return { share };
};
