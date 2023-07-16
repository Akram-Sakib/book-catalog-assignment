import Card from "../../components/Card/Card";
import FilterBook from "../../components/FilterBook/FilterBook";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";
import { useAppSelector } from "../../redux/features/hooks";

const Home = () => {
  const { data, isLoading, isError } = useGetBooksQuery();
  const { filter } = useAppSelector((state) => state.filter);
  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Error</div>;
  } else if (!isLoading && !isError && data) {
    if (filter !== "all") {
      content = data.data
        .filter((book) =>
          book.genre.toLowerCase().includes(filter.toLowerCase())
        )
        .map((book) => <Card key={book.id} book={book} />);
    } else {
      content = data.data.map((book) => <Card key={book.id} book={book} />);
    }
  }

  return (
    <div className="flex flex-col gap-x-5 justify-between">
      <FilterBook />
      <div className="flex gap-x-5 justify-between">{content}</div>
    </div>
  );
};

export default Home;
