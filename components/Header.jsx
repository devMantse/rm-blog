import React from 'react'

export default function Header() {
  return (
   <div className="w-full h-full">
  {/* Code block starts */}
  <nav className="fixed left-0 right-0 z-10 block py-4 bg-white shadow">
    <div className="container px-6 py-0 mx-auto">
      <div className="flex items-center justify-between">
        <button className="flex items-center justify-start w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:w-auto sm:items-stretch sm:justify-start">
          <div className="flex items-center">
            <a href="index.html" className="logo">
              <span>
                <img src="assets/images/logo-sm.png" alt="logo-small" className="inline-block h-8 align-middle logo-sm" />
              </span>
              <span className="self-center">
                <img src="assets/images/logo-dark.png" alt="logo-large" className="logo-lg logo-light hidden dark:inline-block ms-1 group-data-[sidebar=dark]:inline-block" />
                <img src="assets/images/logo-dark.png" alt="logo-large" className="logo-lg logo-dark inline-block dark:hidden ms-1 group-data-[sidebar=dark]:hidden" />
              </span>
            </a>
          </div>
        </button>
        <div className="flex">
          <div className="ltr:me-2 ltr:md:me-4 rtl:me-0 rtl:ms-2 rtl:lg:me-0 rtl:md:ms-4">
            <button id="toggle-theme" className="relative flex rounded-full md:me-0">
              <span className="me-2">Light</span>
              <span data-lucide="moon" className="w-5 h-5 top-icon light " />
              <span data-lucide="sun" className="hidden w-5 h-5 top-icon dark" />
              <span className="ms-2">Dark</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>

  )
}
