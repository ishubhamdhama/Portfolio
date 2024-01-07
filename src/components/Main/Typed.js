import Typed from "typed.js";
import { useEffect, useRef } from "react";
import './Typed.css';

function Navbar() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      showCursor: true,
      loop: true,
      cursorChar: "<span class='custom-cursor'>|</span>"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el} className="typed"></span>
    </div>
  );
}
export default Navbar;