
import {
  Share2,
  SquareTerminal,
} from "lucide-react"
import { Button } from "../ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Logo } from "../icon/logo"
import { ShareButton } from "../themed/button"
import { PageProps } from "@/types"
import { cn } from "@/lib/utils"


export const DashboardNav = (props: PageProps) => {
  return (
    <aside className="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
    <div className="border-b p-2">
      <Logo className={cn("w-10 text-brand", props?.isDemo ? "h-[2.2rem]" : "h-9")} />
    </div>
    <nav className="grid gap-1 p-2">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-lg bg-muted"
            aria-label="Aragorn"
          >
            <SquareTerminal className="size-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          Aragorn
        </TooltipContent>
      </Tooltip>
    </nav>
    <nav className={cn("mt-auto grid gap-1 p-2", props?.isDemo ? "pb-12" : "pb-8")}>
      <Tooltip>
        <TooltipTrigger asChild>
          <ShareButton buttonElement={(
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Account"
            >
              <Share2 className="size-5" />
            </Button>
          )} />
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          Share
        </TooltipContent>
      </Tooltip>
    </nav>
  </aside>
  )
}