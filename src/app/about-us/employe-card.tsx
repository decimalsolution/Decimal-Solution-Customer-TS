import { Mail } from "lucide-react";
import Image from "next/image";
import { TeamMember } from "../../../types";


interface EmployeeCardProps {
    member: TeamMember;
  }

export default function EmployeeCard({ member } : EmployeeCardProps) {
  return (
    <div className="flex flex-col items-stretch justify-center  gap-4 ">
      <Image
        src={member.teamMemberImage}
        alt={member.teamMemberName}
        width={500}
        height={500}
        quality={100}
        className="rounded-xl object-cover object-center w-full h-full aspect-square"
      />
      <div className="flex flex-col gap-1 xl:gap-2">
        <p className="text-xl lg:text-2xl xl:text-3xl font-semibold">
          {member.teamMemberName}
        </p>
        <p className="text-base lg:text-lg xl:text-xl ">
          {member.teamMemberTitle}
        </p>
        <div className="flex gap-2 items-center">
          <Mail size={20} strokeWidth={1.5} />
          <p className="text-base">{member.teamMemberEmail}</p>
        </div>
        {/* <div className="flex gap-4">
          {member.teamMemberFacebookLink && (
            <Link href={member.teamMemberFacebookLink} target="_blank">
              <div className="w-6 h-6 bg-gray-300 rounded-full grid place-items-center hover:bg-[#3b5998] transition-all duration-300">
                <Facebook
                  size={20}
                  strokeWidth={0}
                  className="text-white fill-white"
                />
              </div>
            </Link>
          )}
          {member.teamMemberTwitterLink && (
            <Link href={member.teamMemberTwitterLink} target="_blank">
              <div className="w-6 h-6 bg-gray-300 rounded-full grid place-items-center hover:bg-[#00acee] transition-all duration-300">
                <Twitter
                  size={18}
                  strokeWidth={0}
                  className="text-white fill-white"
                />
              </div>
            </Link>
          )}
          {member.teamMemberLinkedInLink && (
            <Link href={member.teamMemberLinkedInLink} target="_blank">
              <div className="w-6 h-6 bg-gray-300 rounded-full grid place-items-center hover:bg-[#0072b1] transition-all duration-300">
                <Linkedin
                  size={16}
                  strokeWidth={0}
                  className="text-white fill-white"
                />
              </div>
            </Link>
          )}
        </div> */}
      </div>
    </div>
  );
}
