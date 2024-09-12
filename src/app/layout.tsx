import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/header/header'


export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode
    modal: React.ReactNode
}>) {
    return (
        <html>
            <body>
                <Providers>
                    <Header />
                    {modal}
                    <div className="p-5 ">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}
