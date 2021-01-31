import styled from "styled-components";
import getMessage from "./helpers/getMessage";
import { Status } from "./data/status.enum";

const Message = styled.p`
  flex: 0 0 100%;
  height: 60px;
  text-align: center;
  font-size: 32px;
  line-height: 60px;
  margin-bottom: 30px;
  color: #a89243;
`;

const StatusMessage = ({ status }: { status: Status }) => {
  return <Message>{getMessage(status)}</Message>;
};

export default StatusMessage;
