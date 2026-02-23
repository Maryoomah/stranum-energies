import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={goTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 rounded-2xl bg-orange-500 text-white p-4 shadow-2xl hover:bg-orange-600 transition-all active:scale-90 group"
    >
      <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
    </button>
  );
}

export default BackToTop;