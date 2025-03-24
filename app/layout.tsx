import {CounterStoreProvider} from "@/modules/counter/model/counter-store-provider";
import {AntdRegistry} from "@ant-design/nextjs-registry";

export const metadata = {
  title: 'KITSYNE',
  description: 'Learn with KITSYNE!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <AntdRegistry>
            <CounterStoreProvider>{children}</CounterStoreProvider>
          </AntdRegistry>
      </body>
    </html>
  )
}
