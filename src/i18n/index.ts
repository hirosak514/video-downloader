import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  ja: { 
    translation: {
      "app": {
        "title": "ビデオダウンローダー",
        "description": "YouTube、Twitter、その他のウェブサイトから動画をダウンロード",
        "supportedSites": "対応サイト: YouTube, Twitter, Facebook, Instagram, TikTok, その他多数",
        "copyright": "著作権を尊重し、個人利用の範囲でご利用ください"
      },
      "input": {
        "title": "動画URLを入力",
        "description": "YouTube、Twitter、その他の対応サイトのURLを入力してください",
        "placeholder": "https://www.youtube.com/watch?v=...",
        "analyze": "解析",
        "enterUrl": "URLを入力してください"
      },
      "video": {
        "info": "動画情報",
        "duration": "再生時間",
        "download": "ダウンロード (最高品質)",
        "downloading": "ダウンロード中...",
        "saveToPhotos": "写真アプリに保存",
        "showOtherFormats": "その他の形式を表示",
        "downloaded": "動画をダウンロードしました"
      },
      "download": {
        "status": "ダウンロード状況",
        "progress": "ダウンロード中...",
        "completed": "ダウンロード完了: {{filename}}",
        "savedToPhotos": "写真アプリに保存しました: {{filename}}",
        "error": "ダウンロードエラー"
      },
      "errors": {
        "general": "エラーが発生しました",
        "videoInfoFailed": "ビデオ情報の取得に失敗しました",
        "downloadFailed": "ダウンロードに失敗しました"
      },
      "mobile": {
        "instruction": "モバイルユーザーへ: ダウンロード後、ファイルを写真アプリに保存するには、ダウンロードフォルダから動画ファイルを選択し、「共有」→「写真に保存」を選択してください。"
      },
      "ads": {
        "loading": "広告を読み込み中...",
        "loadFailed": "広告の読み込みに失敗しました"
      }
    }
  },
  en: { 
    translation: {
      "app": {
        "title": "Video Downloader",
        "description": "Download videos from YouTube, Twitter, and other websites",
        "supportedSites": "Supported sites: YouTube, Twitter, Facebook, Instagram, TikTok, and many more",
        "copyright": "Please respect copyright and use for personal purposes only"
      },
      "input": {
        "title": "Enter Video URL",
        "description": "Enter the URL of YouTube, Twitter, or other supported sites",
        "placeholder": "https://www.youtube.com/watch?v=...",
        "analyze": "Analyze",
        "enterUrl": "Please enter a URL"
      },
      "video": {
        "info": "Video Information",
        "duration": "Duration",
        "download": "Download (Best Quality)",
        "downloading": "Downloading...",
        "saveToPhotos": "Save to Photos",
        "showOtherFormats": "Show other formats",
        "downloaded": "Video downloaded"
      },
      "download": {
        "status": "Download Status",
        "progress": "Downloading...",
        "completed": "Download completed: {{filename}}",
        "savedToPhotos": "Saved to photos: {{filename}}",
        "error": "Download error"
      },
      "errors": {
        "general": "An error occurred",
        "videoInfoFailed": "Failed to get video information",
        "downloadFailed": "Download failed"
      },
      "mobile": {
        "instruction": "For mobile users: After downloading, to save the file to your photo album, select the video file from your downloads folder and choose 'Share' → 'Save to Photos'."
      },
      "ads": {
        "loading": "Loading ads...",
        "loadFailed": "Failed to load ads"
      }
    }
  },
  zh: { 
    translation: {
      "app": {
        "title": "视频下载器",
        "description": "从YouTube、Twitter和其他网站下载视频",
        "supportedSites": "支持的网站：YouTube、Twitter、Facebook、Instagram、TikTok等",
        "copyright": "请尊重版权，仅供个人使用"
      },
      "input": {
        "title": "输入视频URL",
        "description": "输入YouTube、Twitter或其他支持网站的URL",
        "placeholder": "https://www.youtube.com/watch?v=...",
        "analyze": "分析",
        "enterUrl": "请输入URL"
      },
      "video": {
        "info": "视频信息",
        "duration": "时长",
        "download": "下载（最高质量）",
        "downloading": "下载中...",
        "saveToPhotos": "保存到相册",
        "showOtherFormats": "显示其他格式",
        "downloaded": "视频已下载"
      },
      "download": {
        "status": "下载状态",
        "progress": "下载中...",
        "completed": "下载完成：{{filename}}",
        "savedToPhotos": "已保存到相册：{{filename}}",
        "error": "下载错误"
      },
      "errors": {
        "general": "发生错误",
        "videoInfoFailed": "获取视频信息失败",
        "downloadFailed": "下载失败"
      },
      "mobile": {
        "instruction": "移动用户：下载后，要将文件保存到相册，请从下载文件夹中选择视频文件，然后选择'分享'→'保存到相册'。"
      },
      "ads": {
        "loading": "加载广告中...",
        "loadFailed": "广告加载失败"
      }
    }
  },
  es: { 
    translation: {
      "app": {
        "title": "Descargador de Videos",
        "description": "Descarga videos de YouTube, Twitter y otros sitios web",
        "supportedSites": "Sitios compatibles: YouTube, Twitter, Facebook, Instagram, TikTok y muchos más",
        "copyright": "Por favor respeta los derechos de autor y úsalo solo para fines personales"
      },
      "input": {
        "title": "Ingresa la URL del Video",
        "description": "Ingresa la URL de YouTube, Twitter u otros sitios compatibles",
        "placeholder": "https://www.youtube.com/watch?v=...",
        "analyze": "Analizar",
        "enterUrl": "Por favor ingresa una URL"
      },
      "video": {
        "info": "Información del Video",
        "duration": "Duración",
        "download": "Descargar (Mejor Calidad)",
        "downloading": "Descargando...",
        "saveToPhotos": "Guardar en Fotos",
        "showOtherFormats": "Mostrar otros formatos",
        "downloaded": "Video descargado"
      },
      "download": {
        "status": "Estado de Descarga",
        "progress": "Descargando...",
        "completed": "Descarga completada: {{filename}}",
        "savedToPhotos": "Guardado en fotos: {{filename}}",
        "error": "Error de descarga"
      },
      "errors": {
        "general": "Ocurrió un error",
        "videoInfoFailed": "Error al obtener información del video",
        "downloadFailed": "Error en la descarga"
      },
      "mobile": {
        "instruction": "Para usuarios móviles: Después de descargar, para guardar el archivo en tu álbum de fotos, selecciona el archivo de video de tu carpeta de descargas y elige 'Compartir' → 'Guardar en Fotos'."
      },
      "ads": {
        "loading": "Cargando anuncios...",
        "loadFailed": "Error al cargar anuncios"
      }
    }
  },
  ko: { 
    translation: {
      "app": {
        "title": "비디오 다운로더",
        "description": "YouTube, Twitter 및 기타 웹사이트에서 비디오 다운로드",
        "supportedSites": "지원 사이트: YouTube, Twitter, Facebook, Instagram, TikTok 등",
        "copyright": "저작권을 존중하고 개인적인 용도로만 사용해 주세요"
      },
      "input": {
        "title": "비디오 URL 입력",
        "description": "YouTube, Twitter 또는 기타 지원 사이트의 URL을 입력하세요",
        "placeholder": "https://www.youtube.com/watch?v=...",
        "analyze": "분석",
        "enterUrl": "URL을 입력해 주세요"
      },
      "video": {
        "info": "비디오 정보",
        "duration": "재생 시간",
        "download": "다운로드 (최고 품질)",
        "downloading": "다운로드 중...",
        "saveToPhotos": "사진에 저장",
        "showOtherFormats": "다른 형식 보기",
        "downloaded": "비디오가 다운로드되었습니다"
      },
      "download": {
        "status": "다운로드 상태",
        "progress": "다운로드 중...",
        "completed": "다운로드 완료: {{filename}}",
        "savedToPhotos": "사진에 저장됨: {{filename}}",
        "error": "다운로드 오류"
      },
      "errors": {
        "general": "오류가 발생했습니다",
        "videoInfoFailed": "비디오 정보 가져오기 실패",
        "downloadFailed": "다운로드 실패"
      },
      "mobile": {
        "instruction": "모바일 사용자: 다운로드 후 파일을 사진 앨범에 저장하려면 다운로드 폴더에서 비디오 파일을 선택하고 '공유' → '사진에 저장'을 선택하세요."
      },
      "ads": {
        "loading": "광고 로딩 중...",
        "loadFailed": "광고 로딩 실패"
      }
    }
  },
  fr: { 
    translation: {
      "app": {
        "title": "Téléchargeur de Vidéos",
        "description": "Téléchargez des vidéos depuis YouTube, Twitter et d'autres sites web",
        "supportedSites": "Sites pris en charge : YouTube, Twitter, Facebook, Instagram, TikTok et bien d'autres",
        "copyright": "Veuillez respecter les droits d'auteur et utiliser uniquement à des fins personnelles"
      },
      "input": {
        "title": "Entrez l'URL de la Vidéo",
        "description": "Entrez l'URL de YouTube, Twitter ou d'autres sites pris en charge",
        "placeholder": "https://www.youtube.com/watch?v=...",
        "analyze": "Analyser",
        "enterUrl": "Veuillez entrer une URL"
      },
      "video": {
        "info": "Informations Vidéo",
        "duration": "Durée",
        "download": "Télécharger (Meilleure Qualité)",
        "downloading": "Téléchargement...",
        "saveToPhotos": "Enregistrer dans Photos",
        "showOtherFormats": "Afficher d'autres formats",
        "downloaded": "Vidéo téléchargée"
      },
      "download": {
        "status": "Statut du Téléchargement",
        "progress": "Téléchargement...",
        "completed": "Téléchargement terminé : {{filename}}",
        "savedToPhotos": "Enregistré dans les photos : {{filename}}",
        "error": "Erreur de téléchargement"
      },
      "errors": {
        "general": "Une erreur s'est produite",
        "videoInfoFailed": "Échec de l'obtention des informations vidéo",
        "downloadFailed": "Échec du téléchargement"
      },
      "mobile": {
        "instruction": "Pour les utilisateurs mobiles : Après le téléchargement, pour enregistrer le fichier dans votre album photo, sélectionnez le fichier vidéo dans votre dossier de téléchargements et choisissez 'Partager' → 'Enregistrer dans Photos'."
      },
      "ads": {
        "loading": "Chargement des publicités...",
        "loadFailed": "Échec du chargement des publicités"
      }
    }
  },
  de: { 
    translation: {
      "app": {
        "title": "Video-Downloader",
        "description": "Videos von YouTube, Twitter und anderen Websites herunterladen",
        "supportedSites": "Unterstützte Seiten: YouTube, Twitter, Facebook, Instagram, TikTok und viele mehr",
        "copyright": "Bitte respektieren Sie das Urheberrecht und verwenden Sie es nur für persönliche Zwecke"
      },
      "input": {
        "title": "Video-URL eingeben",
        "description": "Geben Sie die URL von YouTube, Twitter oder anderen unterstützten Seiten ein",
        "placeholder": "https://www.youtube.com/watch?v=...",
        "analyze": "Analysieren",
        "enterUrl": "Bitte geben Sie eine URL ein"
      },
      "video": {
        "info": "Video-Informationen",
        "duration": "Dauer",
        "download": "Herunterladen (Beste Qualität)",
        "downloading": "Wird heruntergeladen...",
        "saveToPhotos": "In Fotos speichern",
        "showOtherFormats": "Andere Formate anzeigen",
        "downloaded": "Video heruntergeladen"
      },
      "download": {
        "status": "Download-Status",
        "progress": "Wird heruntergeladen...",
        "completed": "Download abgeschlossen: {{filename}}",
        "savedToPhotos": "In Fotos gespeichert: {{filename}}",
        "error": "Download-Fehler"
      },
      "errors": {
        "general": "Ein Fehler ist aufgetreten",
        "videoInfoFailed": "Video-Informationen konnten nicht abgerufen werden",
        "downloadFailed": "Download fehlgeschlagen"
      },
      "mobile": {
        "instruction": "Für mobile Nutzer: Nach dem Download, um die Datei in Ihrem Fotoalbum zu speichern, wählen Sie die Videodatei aus Ihrem Download-Ordner und wählen Sie 'Teilen' → 'In Fotos speichern'."
      },
      "ads": {
        "loading": "Werbung wird geladen...",
        "loadFailed": "Werbung konnte nicht geladen werden"
      }
    }
  }
}

const customLanguageDetector = {
  name: 'customDetector',
  lookup: async () => {
    try {
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 })
      })
      
      const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
      const data = await response.json()
      
      const countryLanguageMap: Record<string, string> = {
        'JP': 'ja',
        'US': 'en',
        'GB': 'en',
        'CA': 'en',
        'AU': 'en',
        'CN': 'zh',
        'TW': 'zh',
        'HK': 'zh',
        'ES': 'es',
        'MX': 'es',
        'AR': 'es',
        'KR': 'ko',
        'FR': 'fr',
        'DE': 'de',
        'AT': 'de',
        'CH': 'de'
      }
      
      const countryCode = data.countryCode
      const detectedLanguage = countryLanguageMap[countryCode] || 'en'
      
      console.log(`Detected country: ${countryCode}, language: ${detectedLanguage}`)
      return detectedLanguage
    } catch (error) {
      console.warn('Geolocation failed, falling back to browser language:', error)
      const browserLang = navigator.language.split('-')[0]
      const supportedLanguages = ['ja', 'en', 'zh', 'es', 'ko', 'fr', 'de']
      return supportedLanguages.includes(browserLang) ? browserLang : 'en'
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    detection: {
      order: ['customDetector', 'navigator', 'htmlTag', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    
    interpolation: {
      escapeValue: false,
    },
  })

i18n.services.languageDetector.addDetector(customLanguageDetector)

export default i18n
