import { responseType } from "./types";

export const fetchData = (
  dataSetter: (state: responseType) => void,
  LoaderSetter: (status: boolean) => void,
) => {
  fetch("https://qa.corider.in/assignment/chat?page=0").then((res) => {
    res
      .json()
      .then((res) => {
        dataSetter(res);
      })
      .finally(() => {
        LoaderSetter(false);
      });
  });
};
