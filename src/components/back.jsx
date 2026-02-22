import { useEffect, useState } from "react";

function 
BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={goTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-orange-500 text-white text-3xl p-4 shadow-lg hover:bg-amber-600 transition active:scale-95"
    >
      ↑
    </button>
  );
}

export default BackToTop;