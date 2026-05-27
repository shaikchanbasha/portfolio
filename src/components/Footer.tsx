type FooterProps = {
  darkMode: boolean;
};

function Footer({ darkMode }: FooterProps) {
  return (
    <footer
      className={`border-t py-6 text-center text-slate-400${
        darkMode
          ? "bg-slate-950 border-slate-800 text-slate-500"
          : "bg-slate-50 border-slate-300 text-slate-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© 2026 Chanbasha Shaik • Built with React + TypeScript + Tailwind</p>
      </div>
    </footer>
  );
}

export default Footer;
