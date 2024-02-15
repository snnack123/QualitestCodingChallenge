import { FC, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { StyledUserFetcher } from "./styles";
import { ResponseType } from "./types";
import { useDispatch } from "react-redux";
import { setUsers } from "../../store/slices/userSlice";
import { User } from "../../pages/types";

interface Props {}

export const UserFetcher: FC<Props> = () => {
  const [usersNumber, setUsersNumber] = useState<string>("");

  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (/^\d*$/.test(value) || value === "") {
      setUsersNumber(value);
    }
  };

  const fetchUsers = async () => {
    if (usersNumber === "") {
      return;
    }

    const url = `https://randomuser.me/api/?results=${usersNumber}`;

    try {
      const response = await fetch(url);
      const data: ResponseType = await response.json();
      
      if (response.ok) {
        const users: User[] = data.results.map((user) => {
          return {
            name: {
              first: user.name.first,
              last: user.name.last
            },
            picture: {
              large: user.picture.large,
              medium: user.picture.medium
            }
          }});

        dispatch(setUsers(users));
      }
    }
    catch (error) {
      console.error("Error fetching users", error);
    }
  }

  return (
    <StyledUserFetcher>
      <Input value={usersNumber} onChange={inputHandler} />
      <Button
        ariaLabel="Get users"
        variant="primary"
        disabled={usersNumber === ""}
        onClick={() => fetchUsers()}>
        Fetch users
      </Button>
    </StyledUserFetcher>
  );
};
