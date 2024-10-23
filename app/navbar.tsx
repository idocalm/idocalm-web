const Navbar = () => {
  return (
    <div className="w-screen h-15 py-8 px-16  flex justify-between items-center">
      <a
        className="text-white text-4xl"
        style={{
          fontFamily: "Arizonia",
        }}
        href="/"
      >
        Ido
      </a>
      <div className="flex space-x-8 items-center">
        <a className="text-white tracking-tighter font-bold" href="/">
          Home
        </a>
        <a className="text-white tracking-tighter font-bold" href="/about">
          About
        </a>
        <div className="px-5 py-3 flex rounded-3xl justify-center items-center bg-greenish">
          <a
            className="text-black font-bold tracking-tighter"
            href="mailto:idocalman@outlook.com"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
