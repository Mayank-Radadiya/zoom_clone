import { FC } from "react";

interface pageProps {
  params: {
    id: string;
  };
}

const Page: FC<pageProps> = ({ params }) => {
  return <div>{params.id} </div>;
};

export default Page;


