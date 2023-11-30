import logo from "../assets/logo/Homsia.png";

const Footer = () => {
  return (
    <div className="footer bg-black text-white py-16 px-5 md:px-16 lg:px-20">
      <div className="upper flex flex-col lg:flex-row justify-between mb-10">
        <div className="col-1 lg:w-2/5 mb-5">
          <img
            className="logo h-10 w-24 min-w-[96px] mb-2"
            src={logo}
            alt="homesia"
          />
          <p className="tagline font-medium capitalize mb-3">Your blueprint to better living.</p>
          <p className="text-neutral-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            sit tempore unde ut cum. Ad eveniet, asperiores cumque optio
            aspernatur, perspiciatis dolorum consequatur libero maiores
            architecto, molestiae porro laudantium. Dolorum!
          </p>
        </div>
        <div className="col-2 lg:w-1/5 flex lg:flex-col flex-wrap gap-2 mb-5">
          <h1 className="font-medium">Socials</h1>
          <p className="cursor-pointer text-neutral-500 hover:text-neutral-300  w-fit">Facebook</p>
          <p className="cursor-pointer text-neutral-500 hover:text-neutral-300 w-fit">LinkedIn</p>
          <p className="cursor-pointer text-neutral-500 hover:text-neutral-300 w-fit">Instagram</p>
          <p className="cursor-pointer text-neutral-500 hover:text-neutral-300 w-fit">Youtube</p>
        </div>
        <div className="col-3 lg:w-1/5 flex flex-col gap-2">
          <h1 className="font-medium">Contact</h1>
          <p className="cursor-pointer text-neutral-500 w-fit hover:text-neutral-300">+8801 123641</p>
          <p className="cursor-pointer text-neutral-500 w-fit hover:text-neutral-300">help@homsia.com</p>
          <p className="cursor-pointer text-neutral-500 w-fit hover:text-neutral-300">"House Homsia", Western Road, Banani DOHS</p>
        </div>
      </div>
      <hr className="border-neutral-700"/>
      <div className="lower mt-10">
        <p className="text-center text-neutral-500">© 2021 Homsia Properties Ltd. Developed by <span className="cursor-pointer hover:text-neutral-300">Proteron Digital</span></p>
      </div>
    </div>
  );
};

export default Footer;
