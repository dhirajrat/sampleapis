

class Controller {

  register = (req, res) => {
    try {
      if (req.body) {
        console.log(req.body);
        return res.status(200).send({
          message: "Invalid Input",
        });
      }


        // if (req.body) {
        //   return res.status(409).json({
        //     message: "User Already Exist",
        //   });
        // } else {
        //   return res.status(201).json({
        //     message: "User Data Inserted successfully",
        //   });
        // }
     
    } catch (error) {
      return res.status(500).json({
        message: "server-error",
      });
    }
  };

  addAddress = (req, res) => {
    try {
      console.log(req.body);
            if (req.body) {
        console.log(req.body);
        return res.status(400).send({
          message: "Invalid Input",
        });
      }
      
    } catch (error) {
      return res.json({
        message: "server-error",
      });
    }
  };



}

module.exports = new Controller();
