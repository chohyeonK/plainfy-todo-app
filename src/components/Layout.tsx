import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
        {/* 공통 헤더 */}
        <header className='text-xl font-bold'>
            <h1>Plainfy</h1>
        </header>

        <main className='flex-1 p-4'>
            {children}
        </main>

        {/* 공통 푸터 */}
        <footer className='bg-gray-100 p-4 text-center'>
            © 2025 Plainfy
        </footer>
    </div>
  )
}

export default Layout
