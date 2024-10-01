const content = require("../Schema/content");
const asyncHandler = require("express-async-handler");
const getAllContents = asyncHandler(async (req, res) => {
  const getContents = await content.find().sort({ createdAt: -1 });
  res.status(200).json(getContents);
});
const postContent = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  try {
    const newpost = await content.create({
      title,
      body,
    });
    res.status(200).json({ message: "post successful", newpost });
  } catch (error) {
    res.status(401).json({
      massage: "Unenable to create",
      error,
    });
  }
});
const getSingleContent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const emma = await content.findById(id);
    if (!emma) {
      res.status(401).json({
        massage: "Content not found",
      });
    } else {
      res.status(200).json({
        message: "Successful",
        emma,
      });
    }
    res.status(200).json({
      message: "Successful",
      emma,
    });
  } catch (error) {
    res.status(401).json({
      massage: "error",
      error,
    });
  }
});
const updateContent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  try {
    const updateData = await content.findById(id);
    if (!updateData) {
      res.status(809).json({
        message: "Content not found",
        
      });
    }
    updateData.title = title || updateData.title;
    updateData.body = body || updateData.body;
    await updateData.save();
    res.status(200).json({
      message: "update Successfull",
      updateData,
    });
  } catch (error) {
    res.status(401).json({
      massage: "error",
      error,
    });
  }
});
const deleteContent = asyncHandler(async(req, res) => {
  const {id}= req.params
  try {
    const deleteRequest = await content.findByIdAndDelete(id)
    if(!deleteRequest){
      res.status(801).json({
        massage:"Request Unsucessful"
      })
    }
    res.status(301).json({
      massage:"Delete Sucessful"
    })
 
  } catch (error) {
    res.status(401).json({
      massage: "error",
      error,
    });
  }
});

const postContentyy = asyncHandler((req, res) => {});
module.exports = {
  getAllContents,
  postContent,
  getSingleContent,
  updateContent,
  deleteContent,
};
