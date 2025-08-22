import { useState } from 'react'
import { Download, Video, AlertCircle, CheckCircle, Loader2, Share } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { useIsMobile } from '@/hooks/use-mobile'
import AdComponent from '@/components/AdComponent'
import './App.css'

interface VideoInfo {
  title: string
  duration: string
  thumbnail: string
  formats: Array<{
    format_id: string
    ext: string
    quality: string
    filesize?: number
  }>
}

interface DownloadProgress {
  status: 'downloading' | 'completed' | 'error'
  progress: number
  filename?: string
  error?: string
  shared?: boolean
}

function App() {
  const [url, setUrl] = useState('')
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const [isExtracting, setIsExtracting] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress | null>(null)
  const [error, setError] = useState('')
  const isMobile = useIsMobile()
  const canShare = typeof navigator !== 'undefined' && 'share' in navigator && typeof navigator.canShare === 'function'

  const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

  const extractVideoInfo = async () => {
    if (!url.trim()) {
      setError('URLを入力してください')
      return
    }

    setIsExtracting(true)
    setError('')
    setVideoInfo(null)

    try {
      const response = await fetch(`${API_BASE}/api/extract`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'ビデオ情報の取得に失敗しました')
      }

      const data = await response.json()
      setVideoInfo(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'エラーが発生しました')
    } finally {
      setIsExtracting(false)
    }
  }

  const downloadVideo = async (formatId?: string) => {
    if (!videoInfo) return

    const triggerButton = document.getElementById('trigger-ad') as HTMLButtonElement
    if (triggerButton) {
      triggerButton.click()
      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    setDownloadProgress({ status: 'downloading', progress: 0 })
    setError('')

    try {
      const response = await fetch(`${API_BASE}/api/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          url: url.trim(),
          format_id: formatId 
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'ダウンロードに失敗しました')
      }

      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = `${videoInfo.title}.${formatId ? videoInfo.formats.find(f => f.format_id === formatId)?.ext || 'mp4' : 'mp4'}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(downloadUrl)

      setDownloadProgress({ status: 'completed', progress: 100, filename: a.download })
    } catch (err) {
      setDownloadProgress({ 
        status: 'error', 
        progress: 0, 
        error: err instanceof Error ? err.message : 'ダウンロードエラー' 
      })
    }
  }

  const downloadVideoMobile = async (formatId?: string) => {
    if (!videoInfo) return

    const triggerButton = document.getElementById('trigger-ad') as HTMLButtonElement
    if (triggerButton) {
      triggerButton.click()
      await new Promise(resolve => setTimeout(resolve, 1000))
    }

    setDownloadProgress({ status: 'downloading', progress: 0 })
    setError('')

    try {
      const response = await fetch(`${API_BASE}/api/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          url: url.trim(),
          format_id: formatId 
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'ダウンロードに失敗しました')
      }

      const blob = await response.blob()
      const filename = `${videoInfo.title}.${formatId ? videoInfo.formats.find(f => f.format_id === formatId)?.ext || 'mp4' : 'mp4'}`
      
      if (isMobile && canShare) {
        try {
          const file = new File([blob], filename, { type: blob.type })
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              title: videoInfo.title,
              text: '動画をダウンロードしました',
              files: [file]
            })
            setDownloadProgress({ status: 'completed', progress: 100, filename, shared: true })
            return
          }
        } catch (shareError) {
          console.log('Web Share failed, falling back to download:', shareError)
        }
      }
      
      const downloadUrl = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = downloadUrl
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(downloadUrl)

      setDownloadProgress({ status: 'completed', progress: 100, filename })
    } catch (err) {
      setDownloadProgress({ 
        status: 'error', 
        progress: 0, 
        error: err instanceof Error ? err.message : 'ダウンロードエラー' 
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Video className="h-8 w-8 text-blue-600" />
            ビデオダウンローダー
          </h1>
          <p className="text-gray-600">YouTube、Twitter、その他のウェブサイトから動画をダウンロード</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>動画URLを入力</CardTitle>
            <CardDescription>
              YouTube、Twitter、その他の対応サイトのURLを入力してください
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && extractVideoInfo()}
                className="flex-1"
              />
              <Button 
                onClick={extractVideoInfo} 
                disabled={isExtracting || !url.trim()}
                className="px-6"
              >
                {isExtracting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  '解析'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">{error}</AlertDescription>
          </Alert>
        )}

        <AdComponent placement="content" className="mb-6" />

        {videoInfo && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                動画情報
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                {videoInfo.thumbnail && (
                  <img 
                    src={videoInfo.thumbnail} 
                    alt="Video thumbnail"
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{videoInfo.title}</h3>
                  <p className="text-gray-600 mb-4">再生時間: {videoInfo.duration}</p>
                  
                  <div className="space-y-2">
                    <Button 
                      onClick={() => isMobile ? downloadVideoMobile() : downloadVideo()} 
                      className="w-full sm:w-auto"
                      disabled={downloadProgress?.status === 'downloading'}
                    >
                      {isMobile && canShare ? <Share className="h-4 w-4 mr-2" /> : <Download className="h-4 w-4 mr-2" />}
                      {downloadProgress?.status === 'downloading' ? 'ダウンロード中...' : 
                       isMobile && canShare ? '写真アプリに保存' : 'ダウンロード (最高品質)'}
                    </Button>
                    
                    {videoInfo.formats.length > 1 && (
                      <details className="mt-4">
                        <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                          その他の形式を表示
                        </summary>
                        <div className="mt-2 space-y-2">
                          {videoInfo.formats.slice(0, 5).map((format) => (
                            <Button
                              key={format.format_id}
                              variant="outline"
                              size="sm"
                              onClick={() => isMobile ? downloadVideoMobile(format.format_id) : downloadVideo(format.format_id)}
                              disabled={downloadProgress?.status === 'downloading'}
                              className="mr-2 mb-2"
                            >
                              {format.quality} ({format.ext})
                              {format.filesize && ` - ${Math.round(format.filesize / 1024 / 1024)}MB`}
                            </Button>
                          ))}
                        </div>
                      </details>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {downloadProgress && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {downloadProgress.status === 'downloading' && <Loader2 className="h-5 w-5 animate-spin text-blue-600" />}
                {downloadProgress.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-600" />}
                {downloadProgress.status === 'error' && <AlertCircle className="h-5 w-5 text-red-600" />}
                ダウンロード状況
              </CardTitle>
            </CardHeader>
            <CardContent>
              {downloadProgress.status === 'downloading' && (
                <div>
                  <Progress value={downloadProgress.progress} className="mb-2" />
                  <p className="text-sm text-gray-600">ダウンロード中...</p>
                </div>
              )}
              {downloadProgress.status === 'completed' && (
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    {downloadProgress.shared ? 
                      `写真アプリに保存しました: ${downloadProgress.filename}` : 
                      `ダウンロード完了: ${downloadProgress.filename}`}
                  </AlertDescription>
                </Alert>
              )}
              {downloadProgress.status === 'error' && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">
                    {downloadProgress.error}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        )}

        {isMobile && !canShare && (
          <Alert className="mb-6 border-blue-200 bg-blue-50">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>モバイルユーザーへ:</strong> ダウンロード後、ファイルを写真アプリに保存するには、ダウンロードフォルダから動画ファイルを選択し、「共有」→「写真に保存」を選択してください。
            </AlertDescription>
          </Alert>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>対応サイト: YouTube, Twitter, Facebook, Instagram, TikTok, その他多数</p>
          <p className="mt-1">著作権を尊重し、個人利用の範囲でご利用ください</p>
        </div>

        <AdComponent placement="footer" className="mt-6" />
      </div>
    </div>
  )
}

export default App
