import Connect from '@gandalf-network/connect'
import { useEffect, useState } from 'react'

export const useConnect = () => {
  const [ qrCodeDataUrl, setQRCodeDataUrl ] = useState('');

  const [url, setUrl] = useState('');

  const [ loading, setLoading ] = useState(false);

  const init = async ( services: any = {'youtube': true} ) => {
    // Initialize Connect
    const connect = new Connect({
      publicKey: process.env.NEXT_PUBLIC_GANDALF_PUBLIC_KEY!,
      redirectURL: `https://aragorn.vercel.app/activity`,
      services
    })

    try {
      setLoading(true);

      // Generate the Connect URL
      const connectUrl = await connect.generateURL()

      // Use the URL as needed
      console.log('Generated Connect URL:', connectUrl)

      // If you want to display a QR Code instead:
      const dataUrl = await connect.generateQRCode();

      setQRCodeDataUrl(dataUrl);
      setUrl(connectUrl);

      return { connectUrl, dataUrl }
    } catch (error) {
      // handle error
      console.error('Error:', error)
      setQRCodeDataUrl('');
      setUrl('');
      return { error }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // init()
  }, [])

  return { qrCodeDataUrl, loading, url, init }
}