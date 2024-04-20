import { Outlet } from "react-router-dom";
import Navigation from "@/components/navigation/Navigation";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function RootLayout() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
