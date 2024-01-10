import moment from "moment/moment";

export const getCurrentTimeStamp = () => {
  return moment().format('LLL');
  
};