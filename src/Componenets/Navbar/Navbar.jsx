import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
        <div>
    <nav className="flex flex-col md:flex-row  justify-between items-center py-6 px-5">
    <img src="https://i.ibb.co/YZCxhV8/Logo.png" alt="" />

    <ul className="flex gap-10">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? 
            "text-red-400 underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donate"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? 
            "text-red-400 underline" : ""
          }
        >
          Donate
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? 
            "text-red-400 underline" : ""
          }
        >
          Statistics
        </NavLink>        
      </li>
      
    </ul>
  </nav>
</div>
    </div>
    );
};

export default Navbar;