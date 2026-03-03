import { useState } from 'react'
import Header from './components/Header'
import PlatformTabs from './components/PlatformTabs'
import HotList from './components/HotList'
import { useHotNews } from './hooks/useHotNews'
import './styles/globals.css'

function App() {
  const [platform, setPlatform] = useState('weibo')
  const { data, loading, error } = useHotNews(platform)

  const handleRefresh = () => {
    // 触发重新获取数据
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header onRefresh={handleRefresh} loading={loading} />

      <main className="container mx-auto px-4 py-6 max-w-3xl">
        {/* 平台切换 */}
        <div className="mb-6">
          <PlatformTabs value={platform} onChange={setPlatform} />
        </div>

        {/* 热搜列表 */}
        <HotList data={data} loading={loading} error={error} />

        {/* 底部信息 */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>数据更新时间：{new Date().toLocaleString('zh-CN')}</p>
          <p className="mt-1">© 2025 热搜榜单 · 仅供参考</p>
        </footer>
      </main>
    </div>
  )
}

export default App
