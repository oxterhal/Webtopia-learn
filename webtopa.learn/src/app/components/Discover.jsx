import React from "react";
import Logo from "./Logo";

export default function Discover() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1a1a1a] text-white">
      <div className="w-[90%] h-[90%] flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-6 md:p-10 gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-justify">
            Discover the Power of HTML, CSS, and Wix with Our Online Courses
          </h1>
          <p className="text-md md:text-lg font-light text-justify">
            Our HTML, CSS, and Wix courses provide a comprehensive overview of
            these essential web development tools. Whether you're a beginner or
            an experienced coder, our courses will help you enhance your skills
            and create stunning websites.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-sm text-justify">
              <Logo />
              <span>
                Learn HTML from scratch and build professional websites
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-justify">
              <Logo />
              <span>Master CSS and create visually appealing web designs</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-justify">
              <Logo />
              <span>
                Harness the power of Wix to build and customize websites
              </span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center p-10">
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://dnoenr5u1mwth.cloudfront.net/r46d22%2Fpreview%2F58882938%2Fmain_large.gif?response-content-disposition=inline%3Bfilename%3D%22main_large.gif%22%3B&response-content-type=image%2Fgif&Expires=1719322738&Signature=aNF0h225wDaMro6foCdzw~negTVihbrLRwxsO95Vi6g5rNXAtjUvYwoboGisANMpnT0oB4a7L-zwLHNRwjTM-FNVl5DbPM2a7-zQdnWXHQldMIIUNYW2K~ZVvWNLOSWGDjIUbWz0CrLeIj5mQTAuNoyb~Gh8HCa1WZU3NhHXlm0ndjG8pm9WUK2ZzPchJAkVkd651zD-DBlAtqblFq6v2KkpZ2c-mJdSBnxjdd~l6OIyleivo2LhWK8EqQbA~RfiKrpc3xiDo1vFFFC8cCdqmUlgsPhsn0vXH7IaXKubT37rZtT5PC7PcelTHt4WNrq1skyBD7RVIJgx0lZEv55dqg__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ')",
            }}
            aria-label="Sukhbaatar Square, Ulaanbaatar, Mongolia"
          />
        </div>
      </div>
    </div>
  );
}
