import { Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="section-padding border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div>
        <h3 className="font-display text-xl font-bold gradient-text mb-2">NOMARU</h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Pure essential oils crafted from South Africa's finest botanicals.
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><Mail size={14} /> info@nomaru.co.za</span>
        <span className="flex items-center gap-2"><MapPin size={14} /> South Africa</span>
      </div>
    </div>

    <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} NOMARU. All rights reserved.
    </div>
  </footer>
);

export default Footer;
