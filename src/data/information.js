import { v4 as uuidv4 } from "uuid";
import portfolio from "../assets/images/screen-shots/portfolio_2.0.png";

export const information = [
  {
    id: uuidv4(),
    title: "Day Off Dev",
    tag: "Something",
    summary: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate facere in eaque ab consectetur id magnam. Facilis est quam assumenda possimus fugit et eligendi, aperiam perferendis quae, ad nam velit!`,
    image: portfolio,
  },
  {
    id: uuidv4(),
    title: "Read My Blog",
    tag: "Something",
    summary: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate facere in eaque ab consectetur id magnam. Facilis est quam assumenda possimus fugit et eligendi, aperiam perferendis quae, ad nam velit!`,
    image: "",
  },
  {
    id: uuidv4(),
    title: "Contact me",
    tag: "Something",
    summary: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate facere in eaque ab consectetur id magnam. Facilis est quam assumenda possimus fugit et eligendi, aperiam perferendis quae, ad nam velit!`,
    image: "",
  },
];
