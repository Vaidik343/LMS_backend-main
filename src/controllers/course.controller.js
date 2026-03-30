const {Courses} = require('../models')

   
const createCourses = async (req, res) => {

    try {
       const {name, code , description} = req.body;

        if(!name || !code )
        {
            return res.status(400).json({message:"field required!"});
        }
       const courses = await Courses.create({
        name,code ,description, department_id, class_id, is_active:true
       })

       res.status(200).json(courses);
    } catch (error) {
         console.log("🚀 ~ createCourses ~ error:", error)
         res.status(500).json({message:'Server Error'})
    }

}