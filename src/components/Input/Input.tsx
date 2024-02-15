import { FC } from "react";
import { StyledInput } from "./styles";

interface Props {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<Props> = ({ value, onChange }) => <StyledInput value={value} onChange={onChange} />;

