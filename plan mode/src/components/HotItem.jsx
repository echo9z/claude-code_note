import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { TrendingUp, ExternalLink } from 'lucide-react'
import { formatHot } from '@/hooks/useHotNews'

function HotItem({ item, index }) {
  const getRankColor = (rank) => {
    if (rank === 1) return 'text-red-500'
    if (rank === 2) return 'text-orange-500'
    if (rank === 3) return 'text-yellow-500'
    return 'text-muted-foreground'
  }

  const getRankBg = (rank) => {
    if (rank <= 3) return 'bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950'
    return 'bg-muted/30'
  }

  return (
    <Card
      className="group cursor-pointer overflow-hidden hover:scale-[1.02] active:scale-[0.98]"
      onClick={() => window.open(item.url, '_blank')}
    >
      <div className="flex items-center gap-4 p-4">
        {/* 排名 */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${getRankBg(item.rank)} flex items-center justify-center`}>
          <span className={`font-bold text-lg ${getRankColor(item.rank)}`}>
            {item.rank}
          </span>
        </div>

        {/* 内容区 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-base truncate group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            {item.tag && <Badge variant={item.tag}>{item.tag}</Badge>}
          </div>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              {formatHot(item.hot)}
            </span>
          </div>
        </div>

        {/* 跳转图标 */}
        <ExternalLink className="flex-shrink-0 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
      </div>
    </Card>
  )
}

export default HotItem
