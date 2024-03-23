/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowRight, Loader2, Share } from "lucide-react"
import { Button, ButtonProps } from "../ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useConnect } from "@/hooks/use-connect";
import { useIsMobile } from "@/hooks/use-mobile";
import { ShareModalContent } from "../modal/share";

export const GetStartButton = () => {
  const isMobile = useIsMobile();

  const { url, qrCodeDataUrl, loading } = useConnect();

  const renderContent = () => {
    if (loading || !qrCodeDataUrl) {
      return (
        <div className="flex justify-center items-center min-h-56">
          <Loader2 className="h-7 w-7 animate-spin" />
        </div>
      )
    }

    return (
      <div className="pb-3">
        <p className="text-center mb-3 mx-auto max-w-[340px]">
          { isMobile ? "Click the get started button below to get started!" : "Scan the QR code on your Iphone to get started, You can close this window after scanning." }
        </p>
        <img src={qrCodeDataUrl} alt="QR Code" className="w-64 h-64 rounded-2xl mx-auto border p-2" />
      </div>
    )
  }


  return (
  <AlertDialog>
    <AlertDialogTrigger className="w-full">
      <Button className="w-full" variant="brand" type="button">
        Connect
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogDescription>
          {renderContent()}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="justify-center sm:justify-center">
        <AlertDialogCancel>Close</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export const ShareButton = ({ buttonElement }: { buttonElement?: React.ReactNode }) => {
  return (
  <AlertDialog>
    <AlertDialogTrigger>
      { buttonElement || (
      <Button
        variant="outline"
        size="sm"
        className="gap-1.5 text-sm"
      >
        <Share className="size-3.5" />
        Share
      </Button>
      ) }
    </AlertDialogTrigger>
    <AlertDialogContent>
      <ShareModalContent />
      {/* <AlertDialogFooter>
        <AlertDialogCancel>Close</AlertDialogCancel>
      </AlertDialogFooter> */}
    </AlertDialogContent>
  </AlertDialog>
  )
}