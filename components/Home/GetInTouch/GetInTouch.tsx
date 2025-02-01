import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
export default function GetInTouch() {
  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-4 w-full h-96 items-center bg-AAprimary"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center ">
        <div className="flex flex-row space-x-2 items-center">
          <span className=" font-sans text-AAsecondary text-base">
            What&apos;s Next?
          </span>
        </div>
      </div>
      {/* // ? Get In Touch */}
      <span className="text-gray-500 text-3xl sm:text-4xl font-bold tracking-wider opacity-85">
        Get In Touch
      </span>
      <p className="flex font-Header tracking-wider text-gray-500 text-center px-6 sm:px-16 md:px-0 md:w-[600px]">
        Although I&apos;m Always open for any new opportunities, my inbox is
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="pt-4">
        <a
          // href="mailto:alihussnainjamil001@gmail.com"
          // target={"_blank"}
          // rel="noopener noreferrer"
          href="https://wa.me/923473029577?text=Hello%2C%20I%20need%20help!"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <button
            className="font-mono text-sm bg-AAsecondary text-AAprimary border rounded-xl border-AAsecondary 
                            px-8 py-[12px] sm:py-[12px]  "
          >
            Say Hello
          </button>
        </a>
      </div>
    </div>
  );
}
