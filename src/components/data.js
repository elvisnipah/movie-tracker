import { nanoid } from "nanoid";
const data = [
  {
    id: nanoid(),
    title: "Interstellar",
    rating: "9",
    watchDate: new Date("05 October 2023"),
  },
  {
    id: nanoid(),
    title: "Knives Out",
    rating: "9",
    watchDate: new Date("05 October 2021"),
  },
  {
    id: nanoid(),
    title: "The Day That The Martian Came",
    rating: "7",
    watchDate: new Date("05 October 2020"),
  },
];

export default data;
