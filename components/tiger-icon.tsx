import * as React from "react";
import { cn } from "@/lib/utils";

interface TigerLogoIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const TigerLogoIcon = React.forwardRef<
  SVGSVGElement,
  TigerLogoIconProps
>(({ className, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
      {...props}
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" stroke="#F97316" />
    </svg>
  );
});

TigerLogoIcon.displayName = "TigerLogoIcon";
