import IntlProvider from "@/providers/IntlProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <IntlProvider>{children}</IntlProvider>;
}
