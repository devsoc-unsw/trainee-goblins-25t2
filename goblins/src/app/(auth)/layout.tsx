import React from "react";
import RootLayout from "../layout";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout>
      <div className="mx-auto max-w-md p-4">{children}</div>
    </RootLayout>
  );
};

export default LoginLayout;
