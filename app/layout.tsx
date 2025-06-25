import 'antd/dist/reset.css';
import { CounterStoreProvider } from '@/modules/counter/model/counter-store-provider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import '@styles/global.css';
import Footer from '@components/Footer';

export const metadata = {
  title: 'KITSYNE',
  description: 'Learn with KITSYNE!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <CounterStoreProvider>
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
            </CounterStoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
