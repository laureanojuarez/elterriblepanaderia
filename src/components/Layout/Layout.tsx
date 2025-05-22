import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div className="w-full h-auto flex flex-col">{children}</div>;
}
