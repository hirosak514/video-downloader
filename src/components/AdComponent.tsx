import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import { useTranslation } from 'react-i18next'

interface AdComponentProps {
  placement: 'header' | 'content' | 'footer'
  className?: string
}

export function AdComponent({ placement, className = '' }: AdComponentProps) {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const isMobile = useIsMobile()
  
  const zoneId = (import.meta as unknown as { env: Record<string, string> }).env.VITE_MONETAG_ZONE_ID
  const adsEnabled = (import.meta as unknown as { env: Record<string, string> }).env.VITE_ENABLE_ADS === 'true'

  useEffect(() => {
    if (!adsEnabled || !zoneId) return

    const loadAd = async () => {
      setIsLoading(true)
      setError(null)
      
      try {
        const monetagSdk = await import('monetag-tg-sdk')
        const adHandler = (monetagSdk as unknown as { default: (zoneId: string) => { showRewardedInterstitial: () => Promise<void>; showRewardedPopup: () => Promise<void> } }).default(zoneId)
        
        if (placement === 'content' && !isMobile) {
          await adHandler.showRewardedInterstitial()
        } else if (placement === 'content' && isMobile) {
          await adHandler.showRewardedPopup()
        }
      } catch (err) {
        console.warn('Ad loading failed:', err)
        setError(t('ads.loadFailed'))
      } finally {
        setIsLoading(false)
      }
    }

    if (placement === 'content') {
      return
    }

    loadAd()
  }, [adsEnabled, zoneId, placement, isMobile])

  const triggerAd = async () => {
    if (!adsEnabled || !zoneId) return

    setIsLoading(true)
    setError(null)
    
    try {
      const monetagSdk = await import('monetag-tg-sdk')
      const adHandler = (monetagSdk as unknown as { default: (zoneId: string) => { showRewardedInterstitial: () => Promise<void>; showRewardedPopup: () => Promise<void> } }).default(zoneId)
      
      if (isMobile) {
        await adHandler.showRewardedPopup()
      } else {
        await adHandler.showRewardedInterstitial()
      }
    } catch (err) {
      console.warn('Ad loading failed:', err)
      setError(t('ads.loadFailed'))
    } finally {
      setIsLoading(false)
    }
  }

  if (!adsEnabled || !zoneId) return null

  return (
    <div className={`ad-container ${className}`}>
      {isLoading && (
        <div className="text-center text-sm text-gray-500 py-2">
          {t('ads.loading')}
        </div>
      )}
      {error && (
        <div className="text-center text-xs text-gray-400 py-1">
          {error}
        </div>
      )}
      {placement === 'content' && (
        <button
          onClick={triggerAd}
          disabled={isLoading}
          className="hidden"
          id="trigger-ad"
        />
      )}
    </div>
  )
}

export { AdComponent as default }
