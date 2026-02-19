import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen max-w-screen text-black font-medium">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
