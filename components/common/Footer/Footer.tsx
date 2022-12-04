

export const Footer = () => {
  return (
    <footer className="bg-gray-50 w-full px-4 mx-auto mt-24 max-w-7xl sm:px-6 sm:mt-32 lg:px-8">
      <div className="py-12 border-t md:flex md:items-center md:justify-center">
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} codebySTE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
