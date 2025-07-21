/**
 * ⚠️ Footer
 * This component is a footer for the landing layout.
 * You can customize the styling of it depending on the application you are building.
 */

import { LANDING_PAGE_LINKS } from "@/constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className="text-primary-foreground dark:text-foreground mt-12 flex max-w-[1920px] flex-col justify-between bg-slate-800 px-4 py-10 max-sm:items-center md:px-[80px] lg:px-[144px] 2xl:mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Start Dash Logo & Contacts */}
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold italic"
          >
            <div className="bg-primary flex size-8 items-center justify-center rounded-md font-bold">
              SD
            </div>
            <span>Start Dash</span>
          </Link>
          <p className="mt-2 max-w-[380px] text-sm text-slate-300">
            Kickstart your tech platform with this Next.js template. Build and
            ship application faster with our code.
          </p>
          <div className="mt-4 space-y-1 text-sm">
            <p>📧 Email: support@startdash.com</p>
            <p>📞 Phone: +62 812-1212-1313</p>
          </div>
        </div>
        {/* Start Dash Navigations */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <h4 className="text-base font-bold">Navigation</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              {LANDING_PAGE_LINKS.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-bold">Spotlight</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link href={"/"} className="hover:text-white">
                About Us
              </Link>
              <Link href={"/"} className="hover:text-white">
                FAQ
              </Link>
              <Link href={"/"} className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-base font-bold">Policy</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <Link href={"/"} className="hover:text-white">
                Terms & Agreements
              </Link>
              <Link href={"/"} className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href={"/"} className="hover:text-white">
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-sm">
        © {new Date().getFullYear()} Start Dash. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
