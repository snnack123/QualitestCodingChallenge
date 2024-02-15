import { FC } from "react";
import { Slide, SlideImage } from "./styles";
import { User } from "../../pages/types";

interface Props {
  user: User;
  cardWidth: number;
}

const UserCard: FC<Props> = ({ cardWidth, user }) => {
  return (
    <Slide cardwidth={cardWidth}>
      <SlideImage>
        <img src={user.picture.large} alt="user" />
      </SlideImage>
      <h2>First name: {user.name.first}</h2>
      <p>Last name: {user.name.last}</p>
    </Slide>
  );
};

export default UserCard;
