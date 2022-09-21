require("dotenv").config();

export const checkReqUserId = () => {
  return (req, res, next) => {
    try {
      const user = req.user;
      if (user.id !== req.body.userId && user.roleId !== USER_ROLE.ADMIN) {
        res.status(200).json({ errCode: 1, errMessage: "Not Allowed" });
        return;
      } else {
        return next();
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ errCode: -1, errMessage: "Error service check user" });
    }
  };
};
