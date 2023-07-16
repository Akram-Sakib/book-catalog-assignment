import Card from "../../components/Card/Card";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";

const Home = () => {
  const { data, isLoading, isError } = useGetBooksQuery();

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Error</div>;
  } else if (!isLoading && !isError && data) {
    content = data.data.map((book) => <Card key={book.id} book={book} />);
  }

  return <div className="flex gap-x-5 justify-between">{content}</div>;
};

export default Home;
