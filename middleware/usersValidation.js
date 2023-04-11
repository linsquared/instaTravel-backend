const usersValidation = (req, res, next) => {
    //check for empty inputs
    if (
        !req.body.user_name ||
        !req.body.author ||
        !req.body.password ||
        !req.body.email
    ) {
        return res
            .status(400)
            .send(
                "Please make sure to provide all the information in the fields in a request"
            );
    }

    //check for email formats
    if (
        !req.body.email.includes("@")
    ) {
        return res
            .status(400)
            .send("Please make sure to provide correct email.");
    }
    next();
};

module.exports = usersValidation