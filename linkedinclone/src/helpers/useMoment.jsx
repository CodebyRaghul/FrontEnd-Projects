import moment from "moment/moment";

const getCurrentTimeStamp = () => {
  return (moment().format('LLL'));
};

export default getCurrentTimeStamp;