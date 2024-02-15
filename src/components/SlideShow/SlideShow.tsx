import { FC, useState, useEffect } from "react";
import { ButtonsContainer, SlideWrapper, SlideshowContainer } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserCard from "../UserCard/UserCard";
import { Button } from "../Button/Button";

const Slideshow: FC = () => {
  const { users } = useSelector((state: RootState) => state.users);
  const [isPaused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      const newCardWidth = window.innerWidth;
      setCardWidth(newCardWidth);
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions(); // Initial call to set the initial width

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const handleStart = () => {
    setPaused(false);
  };

  const handleStop = () => {
    setPaused(true);
  };

  return (
    <div>
      {users?.length > 0 && (
        <>
          <SlideshowContainer id="slideshow">
            <SlideWrapper
              as="div"
              ispaused={isPaused.toString()}
              cardwidth={cardWidth}
              totalcards={users.length}
            >
              {users.map((user, index) => (
                <UserCard key={index} user={user} cardWidth={cardWidth} />
              ))}
            </SlideWrapper>
          </SlideshowContainer>

          <ButtonsContainer>
            <Button variant="primary" ariaLabel="Start animation" onClick={handleStart}>
              Start Animation
            </Button>
            <Button variant="primary" ariaLabel="Pause animation" onClick={handleStop}>
              Pause Animation
            </Button>
          </ButtonsContainer>
        </>
      )}
    </div>
  );
};

export default Slideshow;
