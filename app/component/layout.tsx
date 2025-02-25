import Header from "./header";
import Footer from "./footer";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary text-primary">
        <Header />
        <div>{children}</div>
        <Footer />
    </div>
  )
}
