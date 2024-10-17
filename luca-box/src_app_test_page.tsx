import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test shadcn-ui Components</h1>
      <div className="space-y-4">
        <Input placeholder="Enter some text" />
        <Button>Click me</Button>
      </div>
    </div>
  )
}