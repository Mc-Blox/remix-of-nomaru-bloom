import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = "" }: GlassCardProps) => (
  <div className={`glass-card p-6 ${className}`}>
    {children}
  </div>
);

export default GlassCard;
