import 'antd/dist/reset.css';
import { CounterStoreProvider } from '@/modules/counter/model/counter-store-provider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@ant-design/v5-patch-for-react-19';
import Footer from '@components/Footer';
import '@styles/global.css';

export const metadata = {
  title: 'KITSYNE',
  description: 'Learn with KITSYNE!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AntdRegistry>
          <CounterStoreProvider>
            <main>{children}</main>
            <Footer />
          </CounterStoreProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
