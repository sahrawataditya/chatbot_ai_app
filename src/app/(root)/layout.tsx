import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="bg-gray-900 text-white py-6 min-h-screen">{children}</main>
  );
};

export default layout;
