import HotItem from './HotItem'
import { Loader2, AlertCircle } from 'lucide-react'

function HotList({ data, loading, error }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">加载中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <AlertCircle className="w-10 h-10 text-destructive mb-4" />
        <p className="text-destructive font-medium">加载失败</p>
        <p className="text-muted-foreground text-sm mt-1">{error}</p>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <p className="text-muted-foreground">暂无热搜数据</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div
          key={item.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <HotItem item={item} index={index} />
        </div>
      ))}
    </div>
  )
}

export default HotList
