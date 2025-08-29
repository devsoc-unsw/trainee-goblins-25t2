import React from 'react';
import RootLayout from '../layout';

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout>
      <div className="max-w-md mx-auto p-4">
        {children}
      </div>
    </RootLayout>
  );
};

export default LoginLayout;