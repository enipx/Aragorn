"use client";

import {
  CornerDownLeft,
  Mic,
  Paperclip,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { Label } from "@/components/ui/label"

import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DashboardHeader } from "./header";
import { DashboardNav } from "./nav";
import { DashboardForm } from "./form";
import { PageProps } from "@/types";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks";
import { Chart } from "../chart";

export function Dashboard(props: PageProps) {
  const isMobile = useIsMobile();

  const renderBanner = () => {
    const className = "inset-x z-50 text-center fixed w-full h-8 flex justify-center items-center font-medium bg-brand text-sm text-primary-foreground"

    if (props.activities) {
      return (
        <div className={className}>
          You are connected.
        </div>
      )
    }

    if (props.isDemo) {
      return (
        <div className={className}>
          { isMobile ? "You are in demo mode, Connect to view details" : "You are in demo mode, Please connect your account to view your details." }
          
        </div>
      )
    }

    return null
  }

  return (
    <>
      { renderBanner() }
      <div className={cn("grid h-screen w-full pl-[53px]", renderBanner() ? "pt-8" : "")}>
        <DashboardNav {...props} />
        <div className="flex flex-col">
          <DashboardHeader />
          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative hidden flex-col items-start gap-8 md:flex">
              <DashboardForm />
            </div>
            <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 pb-0 lg:col-span-2">
              <Badge variant="outline" className="absolute right-3 top-3">
                Output
              </Badge>
              <Chart />
              {/* <div className="flex-1" /> */}
            </div>
          </main>
        </div>
      </div>
      
    </>
  )
}
