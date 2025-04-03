
const errorHandler = (err, req, res, next) => {
    console.error("Error:", err); // Logs full error for debugging

    return res.status(err.statusCode || 500).json({
        success: false,
        statusCode: err.statusCode || 500,
        message: err.message || "Internal Server Error",
        errors: err.errors || []
    });
};

export default errorHandler;
