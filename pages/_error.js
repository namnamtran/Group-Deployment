import Header from "@/components/Header";
import Footer from "@/components/Footer";

function Error({ statusCode }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-[1240px] mx-auto p-4 mt-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
          </h1>
          <p className="text-lg">Sorry, something went wrong.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;