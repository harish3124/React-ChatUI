import { responseType } from "./types";

export const fetchData = (
  dataSetter: (state: responseType) => void,
  LoaderSetter: (status: boolean) => void,
  pageCount: number,
  data: responseType,
) => {
  fetch("https://qa.corider.in/assignment/chat?page=" + pageCount).then(
    (res) => {
      res
        .json()
        .then((res) => {
          if (pageCount > 0) {
            dataSetter({
              ...data,
              chats: [...res.chats, ...data.chats],
            });
          } else {
            dataSetter(res);
          }
        })
        .finally(() => {
          LoaderSetter(false);
        });
    },
  );
};
