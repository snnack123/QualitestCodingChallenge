import { UserFetcher } from "../components/UserFetcher/UserFetcher";
import { PageWrapper } from "./styles";
import Slideshow from "../components/SlideShow/SlideShow";

export const Home = () => {
  return (
    <PageWrapper>
      <UserFetcher />
      <Slideshow/>
    </PageWrapper>
  );
};
