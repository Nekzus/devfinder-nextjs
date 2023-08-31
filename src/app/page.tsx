"use client";

import { FormSeachUsers, UserCardInfo } from "@/components";

import { UserModel } from "@/interfaces/UserModel";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState<UserModel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      setUser(null);
      setError("user not found");
      return;
    }
    setUser(await res.json());
    setError(null);
  };

  return (
    <>
      <FormSeachUsers getUser={getUser} />
      {user && <UserCardInfo user={user} />}
      {error && (
        <div className="rounded-lg bg-red-500 p-4 text-center text-white">
          {error}
        </div>
      )}
    </>
  );
};
export default Home;
