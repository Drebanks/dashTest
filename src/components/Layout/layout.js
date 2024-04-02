import React from 'react'
import Header from "@/components/UI/Header/header"

const Layout = ({children}) => {
  return (
    <div className="bg-[#FAFCFD] w-screen h-screen">
      <Header />
      <div className="max-w-[1440px] w-[90%] m-auto">{children}</div>
    </div>
  );
}

export default Layout