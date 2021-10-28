const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Archive = require("../models/archivesModel");
const ApiFeatures = require("../utils/apifeatures");


// Creat aechive
exports.addArchive = catchAsyncErrors(async(req,res,next) =>{

    req.body.user = req.user.id;
    
    const archive = await Archive.create(req.body);

    res.status(200).json({
        success: true,
        archive,
    });
});


// get all archives
exports.getAllArchives = catchAsyncErrors(async (req, res, next) => {
   
    const archivesCount = await Archive.countDocuments();
    const archives = await(Archive.find())
 
    res.status(200).json({
      success: true,
      archives,
      archivesCount
    });
  });


// delete archive
exports.deleteArchive = catchAsyncErrors(async(req,res,next) => {
    const archive = await Archive.findById(req.params.id);

    if(!archive){
        return next(new ErrorHandler("Archive not found",404));
    }

    await archive.remove();

    res.status(200).json({
        success: true,
        message: "Archive deleted"
    });

});  

// update archive
exports.updateArchive = catchAsyncErrors(async(req,res,next) => {
    let archive = await Archive.findById(req.params.id);

    if(!archive){
        return next(new ErrorHandler("Archive not found",404));
    }

    archive = await Archive.findByIdAndUpdate(req.params.id,req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success: true,
        archive
    });
});