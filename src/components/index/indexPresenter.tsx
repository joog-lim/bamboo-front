import Link from "next/link";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import s from "./index.module.scss";
import config from "constants/config.json";
import Algorithms from "components/algorithms/algorithms";
import SideBar from "./item/sidebarPresenter";
import { AlgorithmApi } from "types/types";
import Post from "utils/api/post";

const IndexPresenter: React.FC = () => {
  const [data, setData] = useState<any>([]);
  let cursor = "";
  let hasMore = true;

  const useGetPost = () => {
    useEffect(() => {
      console.log("asdf");
      let posts;
      Post.getPost(cursor).then((res) => {
        posts = res.data.posts;
        setData([data.concat(posts)][0]);
      });
    }, []);
    cursor = data[data.length - 1]?.number;
    hasMore = data?.hasNext;
  };

  useGetPost();

  // setTimeout(() => useGetPost(), 2000);

  return (
    <main className={s.main}>
      <SideBar />
      <article>
        <section>
          <nav className={s.nav}>
            <ul>
              <li>
                <Link href={config.LINK.RULE}>규칙</Link>
              </li>
              <li>
                <button>신고하기</button>
              </li>
            </ul>
          </nav>
        </section>
        <article className={s.algorithms} id="scrollableDiv">
          {data?.length}
          <InfiniteScroll
            dataLength={data?.length}
            next={useGetPost}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
            endMessage={<h4>Nothing more to show</h4>}
          >
            {React.Children.toArray(
              data?.map((item: AlgorithmApi) => <Algorithms data={item} />)
            )}
          </InfiniteScroll>
        </article>
      </article>
    </main>
  );
};

export default IndexPresenter;
