import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Toaster position='top-right' />
      <Navbar />
      {children}
    </div>
  )
}
