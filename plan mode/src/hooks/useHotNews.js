import { useState, useEffect } from 'react'

// 模拟热搜数据
const mockData = {
  weibo: [
    { id: 1, rank: 1, title: '春节档电影票房突破100亿', hot: 5200000, tag: '爆', url: '#' },
    { id: 2, rank: 2, title: '多地开启开学第一天', hot: 4800000, tag: '热', url: '#' },
    { id: 3, rank: 3, title: '国乒WTT赛事包揽五冠', hot: 3500000, tag: '热', url: '#' },
    { id: 4, rank: 4, title: '新款AI模型引发热议', hot: 2800000, tag: '新', url: '#' },
    { id: 5, rank: 5, title: '全国各地气温回暖', hot: 2200000, tag: '热', url: '#' },
    { id: 6, rank: 6, title: '高校毕业生就业政策新规', hot: 1800000, tag: '新', url: '#' },
    { id: 7, rank: 7, title: '新能源汽车销量持续增长', hot: 1500000, tag: '', url: '#' },
    { id: 8, rank: 8, title: '年度最佳游戏提名公布', hot: 1200000, tag: '', url: '#' },
    { id: 9, rank: 9, title: '国产大飞机新订单', hot: 980000, tag: '', url: '#' },
    { id: 10, rank: 10, title: '各地文旅活动精彩纷呈', hot: 850000, tag: '', url: '#' },
  ],
  zhihu: [
    { id: 1, rank: 1, title: '如何看待当前的就业形势？', hot: 4200000, tag: '热', url: '#' },
    { id: 2, rank: 2, title: 'AI技术发展对程序员的影响', hot: 3800000, tag: '爆', url: '#' },
    { id: 3, rank: 3, title: '2025年值得期待的新技术', hot: 2900000, tag: '新', url: '#' },
    { id: 4, rank: 4, title: '大学专业选择建议', hot: 2100000, tag: '', url: '#' },
    { id: 5, rank: 5, title: '远程工作的未来趋势', hot: 1700000, tag: '', url: '#' },
    { id: 6, rank: 6, title: '如何培养深度思考能力', hot: 1400000, tag: '', url: '#' },
    { id: 7, rank: 7, title: '健康生活方式的养成', hot: 1100000, tag: '', url: '#' },
    { id: 8, rank: 8, title: '摄影入门技巧分享', hot: 890000, tag: '', url: '#' },
  ],
  baidu: [
    { id: 1, rank: 1, title: '全国两会热点话题', hot: 6800000, tag: '爆', url: '#' },
    { id: 2, rank: 2, title: '天气预报：本周气温变化', hot: 4100000, tag: '热', url: '#' },
    { id: 3, rank: 3, title: '新冠疫苗最新接种指南', hot: 3200000, tag: '新', url: '#' },
    { id: 4, rank: 4, title: '油价调整最新消息', hot: 2800000, tag: '', url: '#' },
    { id: 5, rank: 5, title: '高考报名注意事项', hot: 2300000, tag: '', url: '#' },
    { id: 6, rank: 6, title: '热门旅游景点推荐', hot: 1900000, tag: '', url: '#' },
  ],
  douyin: [
    { id: 1, rank: 1, title: '春日穿搭灵感分享', hot: 5500000, tag: '爆', url: '#' },
    { id: 2, rank: 2, title: '简单易学的家常菜', hot: 3900000, tag: '热', url: '#' },
    { id: 3, rank: 3, title: '旅行vlog：发现美景', hot: 3100000, tag: '热', url: '#' },
    { id: 4, rank: 4, title: '健身运动打卡挑战', hot: 2400000, tag: '新', url: '#' },
    { id: 5, rank: 5, title: '萌宠日常可爱瞬间', hot: 1800000, tag: '', url: '#' },
    { id: 6, rank: 6, title: '搞笑段子合集', hot: 1500000, tag: '', url: '#' },
    { id: 7, rank: 7, title: '美妆教程分享', hot: 1200000, tag: '', url: '#' },
    { id: 8, rank: 8, title: '手工DIY创意制作', hot: 980000, tag: '', url: '#' },
  ],
}

// 平台配置
export const platforms = [
  { id: 'weibo', name: '微博', icon: '📱' },
  { id: 'zhihu', name: '知乎', icon: '🧠' },
  { id: 'baidu', name: '百度', icon: '🔍' },
  { id: 'douyin', name: '抖音', icon: '🎵' },
]

// 格式化热度数值
export function formatHot(num) {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(1) + '千万'
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万'
  }
  return num.toString()
}

export function useHotNews(platform = 'weibo') {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 500))

      try {
        // 这里使用模拟数据，实际项目中应该调用真实API
        const platformData = mockData[platform] || []
        setData(platformData)
      } catch (err) {
        setError('获取热搜数据失败，请稍后重试')
        console.error('Failed to fetch hot news:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [platform])

  return { data, loading, error }
}
