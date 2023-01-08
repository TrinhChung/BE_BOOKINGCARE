import commentService from "../services/commentService";
let createNewComment = async (req, res, next) => {
  try {
    if (
      !req ||
      !req.body ||
      !req.body.fkId ||
      !req.body.keyMap ||
      !req.body.content
    ) {
      return res.status(200).json({ error: 1, errMessage: "Missing body" });
    }
    let comment = await commentService.createNewCommentService(req.body);
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let editComment = async (req, res, next) => {
  try {
    if (
      !req ||
      !req.params ||
      !req.params.id ||
      !req.body ||
      !req.body.content
    ) {
      return res
        .status(200)
        .json({ error: 1, errMessage: "Missing parameter" });
    }
    let comment = await commentService.editCommentService(
      +req.params.id,
      req.body.content
    );
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let deleteComment = async (req, res, next) => {
  try {
    if (!req || !req.params || !req.params.id) {
      return res
        .status(200)
        .json({ error: 1, errMessage: "Missing parameter" });
    }
    let comment = await commentService.deleteCommentService(+req.params.id);
    return res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let getAllComments = async (req, res, next) => {
  try {
    if (!req || !req.query || !req.query.keyMap || !req.query.fkId) {
      return res.status(200).json({ error: 1, errMessage: "Missing query" });
    }
    let comments = await commentService.getAllCommentsService(
      +req.query.keyMap,
      +req.query.fkId
    );
    return res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

module.exports = {
  createNewComment: createNewComment,
  deleteComment: deleteComment,
  editComment: editComment,
  getAllComments: getAllComments,
};
