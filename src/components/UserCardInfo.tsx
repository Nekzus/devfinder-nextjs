import {
  BuildingIcon,
  GithubIcon,
  LinkIcon,
  LocationIcon,
  XIcon,
} from "@/components";

import Image from "next/image";
import { UserModel } from "@/interfaces/UserModel";
import validateURL from "@/helpers/validateUrl";

interface Props {
  user: UserModel;
}

const UserCardInfo = ({ user }: Props) => {
  return (
    <article className="grid-areas rounded-xl bg-blue-900 p-4 text-white">
      <div className="section-logo mr-3 grid h-24 w-24 place-content-center overflow-hidden rounded-full bg-gray-200 p-1 lg:mx-auto">
        {user.avatar_url ? (
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={96}
            height={96}
            className="rounded-full"
          />
        ) : (
          <GithubIcon className="relative top-2 h-full w-full" />
        )}
      </div>
      <div className="section-title">
        <h2 className="text-3xl font-bold">{user.name}</h2>
        <p>@{user.login}</p>
      </div>
      <p className="section-date lg:text-right">
        {new Date(user.created_at || "").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <p className="section-description mt-8 leading-loose">
        {user.bio || "Not information"}
      </p>
      <div className="section-number mt-4 flex justify-around rounded-xl bg-blue-950 p-8 text-center">
        <article>
          <p>Repos</p>
          <p className="text-xl font-bold">{user.public_repos}</p>
        </article>
        <article>
          <p>Followers</p>
          <p className="text-xl font-bold">{user.followers}</p>
        </article>
        <article>
          <p>Following</p>
          <p className="text-xl font-bold">{user.following}</p>
        </article>
      </div>
      <div className="section-social mt-4 space-y-3 md:grid md:grid-cols-2">
        <article className="flex space-x-2">
          <i>
            <LocationIcon
              className="h-full w-full fill-white"
              width={"1rem"}
            />
          </i>
          <span>{user.location}</span>
        </article>
        <article className="flex space-x-2">
          <i>
            <LinkIcon
              className="h-full w-full fill-white"
              width={"1rem"}
            />
          </i>
          <a
            href={validateURL(user.blog)}
            className="truncate"
          >
            {user.blog || "not information"}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <XIcon
              className="h-full w-full fill-white"
              width={"1rem"}
            />
          </i>
          <a href={`https://twitter.com/${user.twitter_username}`}>
            @{user.twitter_username}
          </a>
        </article>
        <article className="flex space-x-2">
          <i>
            <BuildingIcon
              className="h-full w-full fill-white"
              width={"1rem"}
            />
          </i>
          <span>{user.company || "not information"}</span>
        </article>
      </div>
    </article>
  );
};
export default UserCardInfo;
