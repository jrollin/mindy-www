import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          <div className="flex items-center space-x-3">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/webpages">Webpages</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
