import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { platforms } from '@/hooks/useHotNews'

function PlatformTabs({ value, onChange }) {
  return (
    <Tabs value={value} onValueChange={onChange}>
      <TabsList className="w-full justify-start bg-muted/50 p-1.5 h-auto rounded-xl">
        {platforms.map((platform) => (
          <TabsTrigger
            key={platform.id}
            value={platform.id}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            <span className="text-lg">{platform.icon}</span>
            <span className="font-medium">{platform.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

export default PlatformTabs
