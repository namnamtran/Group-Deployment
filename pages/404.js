import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Custom404() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-[1240px] mx-auto p-4 mt-20 text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}