const referralParams = "utm_source=test-driven-carousel&utm_medium=referral";

const getUsernameUrl = (username: string) =>
  `https://unsplash.com/@${username}?${referralParams}`;

const getAttribution = ({
  name,
  username,
}: {
  name: string;
  username: string;
}) => (
  <>
    Photo by <a href={getUsernameUrl(username)}>{name}</a> on{" "}
    <a href={`https://unsplash.com/?${referralParams}`}>Unsplash</a>
  </>
);

export default [
  {
    description: "Seattle",
    attribution: getAttribution({
      name: "Ganapathy Kumar",
      username: "gkumar2175",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1469321461812-afeb94496b27?w=1080" +
      "&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=568095e79ee2cb55a795ad454ac9cf5e",
  },
  {
    description: "Chicago",
    attribution: getAttribution({
      name: "Austin Neill",
      username: "arstyy",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?w=1080" +
      "&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=f56c763ccf86e87644b049c9abbcf455",
  },
  {
    description: "Barcelona",
    attribution: getAttribution({
      name: "Enes",
      username: "royalfound",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=1080" +
      "&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=e836c604036680eeba5c77ebdb171c73",
  },
  {
    description: "New York",
    attribution: getAttribution({
      name: "Anthony DELANOIX",
      username: "anthonydelanoix",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1423655156442-ccc11daa4e99?w=1080" +
      "&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=54a272d03f5c06c416e8899f113dff06",
  },
  {
    description: "Rio de Janeiro",
    attribution: getAttribution({
      name: "Agustín Diaz",
      username: "agussdiaz28",
    }),
    imgUrl:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1080" +
      "&ixid=eyJhcHBfaWQiOjIzODE4fQ&s=966003791f746c210b73863cf6170e6c",
  },
];
