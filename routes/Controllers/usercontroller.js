import User from "../models/User.js"


//Admin API
export const createAdmin=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const user = new User({
        name,
        email,
        password,
        role: "Admin",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "User created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  }




// Alumni API
  export const createAlumni = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new User({
            name,
            email,
            password,
            role: "Alumni",
        });    

        const savedUser = await user.save();

        res.json({
            savedUser,
            message: "Alumni created successfully",
        });
    } catch (error) {
        res.json({
            error: "Error occurred",
        });
        console.log(error);
    }
};



//Student API

export const createStudent = async (req, res) => {
  try {
      const { name, email, password } = req.body;

      const user = new User({
          name,
          email,
          password,
          role: "Student",
      });

      const savedUser = await user.save();

      res.json({
          savedUser,
          message: "Student created successfully",
      });
  } catch (error) {
      res.json({
          error: "Error occurred",
      });
      console.log(error);
  }
};

export const getAllUsers=async(req,res)=>{
  try{
    const getusers=await User.find()
    res.json({
      getusers
    })

  }
  catch(error){
    res.json({
      error:"cannot fecth error"
    })
    console.log(error);

  }
}

