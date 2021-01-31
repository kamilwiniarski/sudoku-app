import { Status } from "../data/status.enum";

const getMessage = (status?: Status): string => {
  let message: string;
  switch (status) {
    case Status.COMPLETED:
      message = "Congrats, you did it!";
      break;
    case Status.ERRORS:
      message = "Some fields need to be corrected...";
      break;
    case Status.IN_PROGRESS:
      message = "So far, so good!";
      break;
    case Status.PLAYING:
      message = "";
      break;
    case Status.WRONG_INPUT:
      message = "Provided input is wrong, game started with default board!";
      break;
    default:
      message = "";
      break;
  }
  return message;
};

export default getMessage;
