import { useState } from "react";

const strengthLabels = ["weak", "medium", "strong", "very strong"];

export const PasswordStrength = ({ placeholdeer, onChange }) => {
  const [strength, setStrength] = useState("");
  const getStrength = (password) => {
    let indicator = -1;
    if (/[a-z]/.test(password)) indicator++;
    if (/[A-Z]/.test(password)) indicator++;
    if (/\d/.test(password)) indicator++;
    if (password.length > 10) indicator++;
    return strengthLabels[indicator];
  };
};
