import './globals.css'
import { Inter, Press_Start_2P } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const gaming = Press_Start_2P({
  weight: "400",
  style: 'normal',
  subsets: ["latin"],
  // this will be the css variable
  variable: "--Press_Start_2P",
});

export const metadata = {
  title: 'Rose Kingdom',
  description: 'Rose Kingdom',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gaming.className} >
        <div className="w-screen h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
