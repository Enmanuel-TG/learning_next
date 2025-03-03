import { ActiveLink } from "@/components"
export const Navbar = () => {

  const links = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/pricing", text: "Pricing" },
  ]


  return (
    <nav className="flex justify-between bg-blue-500 p-2 bg-opacity-30 m-2 rounded">
      <span className="mx-2">Home</span>
      <div className="flex gap-3 mx-3">
        {links.map((link, index) => (
          <ActiveLink key={index} path={link.path} text={link.text} />
        ))}
      </div>
    </nav>
  );
};
