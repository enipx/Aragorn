/* eslint-disable @next/next/no-img-element */
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog"
import { useIsMobile } from "@/hooks"
import { AlertDialogProps } from "@radix-ui/react-alert-dialog"
import { Loader2 } from "lucide-react"
import { Button } from "../ui/button"

export const ConnectModal = ({ imageUrl, dataUrl, loading, ...props}: AlertDialogProps & { imageUrl?: string, dataUrl?: string, loading?: boolean }) => {
  const isMobile = useIsMobile();

  const renderContent = () => {
    if (loading || !imageUrl) {
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

        { isMobile ? (
          <a href={dataUrl || imageUrl} className="block text-center" target="_blank">
            <Button variant="brand" className="my-5 w-full max-w-xs mx-auto">Connect</Button>
          </a>
        ) : (
          <img src={imageUrl} alt="QR Code" className="w-64 h-64 rounded-2xl mx-auto border p-2" />
        )}
      </div>
    )
  }

  return (
    <AlertDialog {...props}>
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