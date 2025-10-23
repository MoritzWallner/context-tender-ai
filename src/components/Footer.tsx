import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center text-slate-400">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img src={logo} className="w-64" />
        </div>
        <p className="text-sm mb-3">{t("footer.copyright")}</p>
        <div className="flex items-center justify-center gap-4 text-sm">
          <Link
            to="/imprint"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            {t("footer.imprint")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
