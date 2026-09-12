import logoText from "../assets/logo-text.png";
export default function Footer() {
  const groups = [
    {
      title: "Product",
      links: ["Technologies", "Projects", "Features"],
    },
    {
      title: "Company",
      links: ["About", "Contact", "Careers"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms"],
    },
  ];

  return (
    <footer
      id="contact"
      className="mt-20 border-t border-gray-100 bg-[#fefeff] text-black"
    >
      <div className="section-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2"
            >
              <img
                        src={logoText}
                        alt="Dev Stack"
                        className="h-9 w-auto object-contain"
                      />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-black-400">
              Discover the tools and technologies you need to build modern,
              scalable and beautiful digital products.
            </p>

            <div className="mt-6 flex gap-7">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm text-black-400 transition hover:border-white/30 hover:text-gray-400"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm text-black-400 transition hover:border-white/30 hover:text-gray-400"
              >
               Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm text-black-400 transition hover:border-white/30 hover:text-gray-400"
              >
               LinkedIn
              </a>
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-sm font-bold">{group.title}</h3>

              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 transition hover:text-black"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-black/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-Black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}