import { Button } from "@/components/ui/button";
import {
  ChevronRightIcon,
  EnvelopeOpenIcon,
  HamburgerMenuIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button disabled>Disable</Button>
      <Button size="icon" variant="outline">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}
