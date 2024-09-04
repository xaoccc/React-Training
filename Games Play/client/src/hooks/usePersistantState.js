import { useState } from "react";

export default function UsePersistantState(defaultValue) {
  const [state, setState] = useState(defaultValue);

  return [state, setState];
}