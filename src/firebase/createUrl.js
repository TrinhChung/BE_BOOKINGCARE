require("dotenv").config();

export const createUrl = (fileName) => {
  return (
    process.env.HOST_FIRE_BASE +
    process.env.STORAGE_BUCKET +
    "/o/" +
    fileName +
    "?alt=media"
  );
};
