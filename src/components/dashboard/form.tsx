import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn, openLink } from "@/lib/utils"
import { AmazonIcon, NetflixIcon, PlayStationIcon, YoutubeIcon } from "../icon"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Button } from "../ui/button"
import { useConnect, useIsMobile } from "@/hooks"
import { ConnectModal } from "../modal/connect"
import { useStateProviderContext } from "../provider/state"
import { ConfigurationType } from "@/types"

interface DashboardFormProps {
  className?: string
}

export const DashboardForm: React.FC<DashboardFormProps> = ({ className }) => {
  const [ showConnectModal, setShowConnectModal ] = useState(false);

  const [imageUrl, setImageUrl] = useState<string>("");

  const [url, setUrl] = useState<string>("");

  const { init, loading } = useConnect();

  const isMobile = useIsMobile();

  const { config, setConfig } = useStateProviderContext() || {};

  const onOptionChange = (name: keyof ConfigurationType, value: any) => {
    if (setConfig) {
      setConfig({
        ...config,
        [name]: value
      } as ConfigurationType)
    }
  }

  const onClick = async (e: any) => {
    e.preventDefault();
    console.log(config);

    if (!config?.service) {
      console.error('Service not selected');
      return;
    };

    try {
      const { connectUrl, dataUrl } = await init({ [config.service]: true });

      if (isMobile) {
        // fix safari blocker
        openLink(connectUrl || "");
      }

      setImageUrl(!isMobile ? dataUrl || "" : connectUrl || "");
      setUrl(connectUrl || "");
      setShowConnectModal(true);
    } catch (error) {
      console.error('Error:', error)
    }
  };


  return (
    <form className={cn("grid w-full items-start gap-6", className)}>
      <ConnectModal
        onOpenChange={(open) => setShowConnectModal(open)}
        open={showConnectModal}
        imageUrl={imageUrl}
        dataUrl={url}
        loading={loading}
      />
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">
        Service
        </legend>
        <div className="grid gap-3">
          <Select
            defaultValue={config?.service}
            onValueChange={(value: string) => onOptionChange("service", value)}>
            <SelectTrigger
              id="model"
              className="items-start [&_[data-description]]:hidden"
            >
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="youtube">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <YoutubeIcon />
                  <div className="grid gap-0.5">
                    <p>
                      <span className="font-medium text-foreground">
                        Youtube
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      View your watch history and liked videos.
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="netflix">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <NetflixIcon />
                  <div className="grid gap-0.5">
                    <p>
                      <span className="font-medium text-foreground">
                        Netflix
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      View your watch history and liked videos.
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="playstation">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <PlayStationIcon />
                  <div className="grid gap-0.5">
                    <p>
                      <span className="font-medium text-foreground">
                        Playstation
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      View your gaming history and liked games.
                    </p>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="amazon">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <AmazonIcon />
                  <div className="grid gap-0.5">
                    <p>
                      <span className="font-medium text-foreground">
                        Amazon
                      </span>
                    </p>
                    <p className="text-xs" data-description>
                      View your order history and liked products.
                    </p>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </fieldset>

      <fieldset className="grid gap-6 rounded-lg border p-4">
        <legend className="-ml-1 px-1 text-sm font-medium">
          Options
        </legend>
        
        <div className="grid gap-3">
          <Label htmlFor="temperature">Limited Access</Label>
          <Select
            defaultValue={config?.limitedAccess}
            onValueChange={(value: string) => onOptionChange("limitedAccess", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select options" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">1 hour</SelectItem>
              <SelectItem value="1d">1 day</SelectItem>
              <SelectItem value="1w">1 week</SelectItem>
              <SelectItem value="persist">Persist</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="temperature">Data Sharing</Label>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-y-5 pt-2 pb-6 mb-4 border-b">
            <div className="flex items-center space-x-2">
              <Checkbox id="personal-info"
                checked={config?.sharePersonalInfo}
                onCheckedChange={(checked) => onOptionChange("sharePersonalInfo", checked)}
              />
              <label
                htmlFor="personal-info"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Share Personal Info
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="location" 
                checked={config?.shareLocation}
                onCheckedChange={(checked) => onOptionChange("shareLocation", checked)}
              />
              <label
                htmlFor="location"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Share Location
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="usage-data"
                checked={config?.shareUsageData}
                onCheckedChange={(checked) => onOptionChange("shareUsageData", checked)}
              />
              <label
                htmlFor="usage-data"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Share Usage Data
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="anonymity"
                checked={config?.anonymize}
                onCheckedChange={(checked) => onOptionChange("anonymize", checked)}
              />
              <label
                htmlFor="anonymity"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Anonymize me
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="audit"
            checked={config?.enableAuditLogs}
            onCheckedChange={(checked) => onOptionChange("enableAuditLogs", checked)}
          />
          <label
            htmlFor="audit"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Enable audit logs to track third-party data access
          </label>
        </div>
      </fieldset>

      <div>
        <Button className="w-full" variant="brand" type="button" onClick={onClick} loading={loading}>
          Connect
        </Button>
      </div>
    </form>
  )
}