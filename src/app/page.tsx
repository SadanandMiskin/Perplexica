import ChatWindow from '@/components/ChatWindow';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { AuthProvider } from '@/components/AuthContext';
import AuthWrapper from '@/components/AuthWrapper';

export const metadata: Metadata = {
  title: 'Chat - Perplexica',
  description: 'Chat with the internet, chat with Perplexica.',
};

const Home = () => {
  return (
    <AuthProvider>
      <AuthWrapper>
        <div>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-black">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          }>
            <ChatWindow />
          </Suspense>
        </div>
      </AuthWrapper>
    </AuthProvider>
  );
};

export default Home;