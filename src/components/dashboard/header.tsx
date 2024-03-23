import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "../ui/button"
import { Settings } from "lucide-react"

import { ModeToggle } from "../themed/dropdown"
import { ShareButton } from "../themed/button"
import { DashboardForm } from "./form"
import { PageProps } from "@/types"

export const DashboardHeader = (props: PageProps) => {
  return (
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
    <h1 className="text-xl font-semibold">Aragorn</h1>
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Settings className="size-4" />
          <span className="sr-only">Settings</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Configuration</DrawerTitle>
          <DrawerDescription>
            Configure the settings for the model and messages.
          </DrawerDescription>
        </DrawerHeader>
        <DashboardForm className="overflow-auto p-4 pt-0 mb-4" />
        
      </DrawerContent>
    </Drawer>
    <div className="ml-auto flex gap-x-2">
      <ShareButton />
      <ModeToggle />
    </div>
  </header>
  )
}