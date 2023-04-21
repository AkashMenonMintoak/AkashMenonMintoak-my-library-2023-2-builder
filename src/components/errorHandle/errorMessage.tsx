const replaceWith = "[ID]";

const errorMessage: any = {
  ERR_BAD_REQUEST: "Oops! something went wrong.",
  error: "",
  SES_EXP: "Session has Expired",
  INV_DT: "The Date String format is invalid",
  NF_USER: "User not found!",
  DUP_REQ: "Entity already exists...",
  NF_ENT: "Entity not found for this request!",
  CRT_EMP: "Cart is Empty!",
  INV_REQ: "Invalid request!",
  NF_DATA: "No data found for this request!",
  INV_ID: `The ${replaceWith} is invalid`,
  Ser_Err: "Internal server error",
  ERR_BAD_RESPONSE: "Oops! something went wrong",
};

export default errorMessage;
export { replaceWith };
