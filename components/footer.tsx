import Link from "next/link";
import Image from "next/image";
import { Merge as Tiger } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background flex justify-center">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Tiger className="h-6 w-6" />
              <Image
                src="/assets/logo.svg"
                alt="TigraLabs"
                width={120}
                height={32}
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Boosting your business operations through IT services,
              outsourcing, digital transformation, and automation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/outstaff"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Outstaff
                </Link>
              </li>
              <li>
                <Link
                  href="/services/outsource"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Outsource
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digitalization"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Digitalization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/automation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Automation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/cases"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@tigralabs.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@tigralabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TigraLabs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
