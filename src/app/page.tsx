import SearchIcon from "@/components/icons/SearchIcon";

const Home = () => {
  return (
    <>
      <form className="flex items-center gap-2 bg-blue-900 p-2 rounded-xl">
        <span className="h-7 w-7">
          <SearchIcon
            className="fill-blue-500"
            // width={25}
            // height={25}
          />
        </span>
        <input
          type="text"
          placeholder="Search GitHub username"
          className="h-full flex-1"
        />
        <button className="bg-blue-500 rounded-lg py-4 px-4 text-white font-bold">
          Search
        </button>
      </form>
      <article>Todo el chamullo de la pagina</article>
    </>
  );
};
export default Home;
