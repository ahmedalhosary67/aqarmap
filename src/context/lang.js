import { createContext, useContext } from "react";
import Translation from "../services/translation.json";

export const Lang = createContext();

export function trans(name) {
  const { lang } = useContext(Lang);
  const nameLower = name.toLowerCase();
  let langChange;

  Translation[nameLower] === undefined
    ? (langChange = name)
    : (langChange =
        lang === "en" ? Translation[nameLower].en : Translation[nameLower].ar);

  return langChange;
}


export function transApi(name) {
  const { lang } = useContext(Lang);

  return lang === "en" ? name.en : name.ar;
}
