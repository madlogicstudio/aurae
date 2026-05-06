'use client';

import { useIsMobile } from './hooks/useIsMobile'
import { useState, useEffect } from 'react';
import Header from './layouts/Header';
import Content from './layouts/Content';

function Page() {

  const isMobile = useIsMobile();

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setIsDark(saved === "dark");
  }, []);

  return (
    <div className={`${isMobile? "" : ""}
      h-auto w-full flex flex-col items-start justify-start`}>
      <Header isDark={isDark} setIsDark={setIsDark}/>
      <Content isDark={isDark}/>
    </div>
  )
}

export default Page