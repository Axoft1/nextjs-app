import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { GetStaticProps } from "next";

function Home({menu}:HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
    <ul>
      {/* {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))} */}
    </ul>
      <Htag tag={"h1"}>Text</Htag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">Text</P>
      <Tag size="s" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        green
      </Tag>
      <Tag size="m" color="grey">
        grey
      </Tag>
      <Tag size="s" color="grey" href="#">
        grey
      </Tag>
      <Tag size="s" color="primary" href="#">
        primary
      </Tag>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}