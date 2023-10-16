const Footer = () => {
  return (
    <div className="footer">
      <div className="w-full max-w-screen-2xl mx-auto p-2 md:py-2">
        <hr className="my-6  bg-green-100 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
