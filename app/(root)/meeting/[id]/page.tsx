import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const Page: FC<pageProps> = async ({ params }) => {
  const { id } = await params;
  return <p>ID: {id}</p>;
};

export default Page;
