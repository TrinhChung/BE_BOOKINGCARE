import handbookService from "../services/handbookService";

let createNewHandleBook = async (req, res) => {
  try {
    let response = await handbookService.createNewHandleBookService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let getHandBook = async (req, res) => {
  try {
    let response = await handbookService.getHandBookService();
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let getDetailHandBook = async (req, res) => {
  try {
    if (req.params.id === undefined) {
      return res
        .status(200)
        .json({ errCode: -1, errMessage: "Missing params ID" });
    }
    let response = await handbookService.getDetailHandBookService(
      req.params.id
    );
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

module.exports = {
  getHandBook: getHandBook,
  createNewHandleBook: createNewHandleBook,
  getDetailHandBook: getDetailHandBook,
};
