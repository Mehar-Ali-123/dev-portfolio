import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
const ClickableIcon = props => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noopener noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-500 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
    </a>
  );
};
const IconsData = [
  { href: "https://github.com/Mehar-Ali-123", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/ali-hussnain-jamil-b678a5255/", Icon: LinkedinIcon },
  { href: "https://www.instagram.com/devluce.official/", Icon: InstagramIcon },
  // { href: "https://www.youtube.com/channel/UC4PmkdDiOHcOs0uSfv5aMGw", Icon: YoutubeIcon },
];

export default function Fotter(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      {/* // ? Reach me at */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>
      <a href={props.githubUrl} className="" target={"_blank"} rel="noopener noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-500 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Built by Ali Hussnain Jamil
          </span>

          
        </div>
      </a>
    </div>
  );
}
