const {Department} = require("../models");

const createDepartment = async (req, res) => {
    try {
        const {name, code ,description} = req.body;

        if(!name || !code || !description)
        {
            return res.status(404).json({message:"Not found!"});
        }

        const department = await Department.create({
            name, code ,description , is_active:false
        })

        res.status(200).json({message:"Department creaetd!", department});
    } catch (error) {
    console.log("🚀 ~ createDepartment ~ error:", error)
          res.status(500).json({message:'Server Error'})
    }

}

// get all


const getAllDepartment = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20
        const offset = (page - 1) * limit

        const {count, rows} = await Department.findAndCountAll({
            order:[["DESC"]],
            limit,
            offset           
        });

        return res.status(200).json({message:"List of All deparment"})

    } catch (error) {
            console.log("🚀 ~ getAllDepartment ~ error:", error)
                res.status(500).json({message:'Server Error'})
    }

}

  // get by id
const getById = async (req, res) => {
    try {
        const deparmentId = req.params.u_id; 
        const department = await findOne(deparmentId);

        if(!department)
        {
            return res.status(404).json({message:"Not Found"})
        }

        res.status(200).json({message:"Deparment Found!"})
    } catch (error) {
          console.log("🚀 ~ getById ~ error:", error)
           res.status(500).json({message:'Server Error'})
    }
}


// update
const updateDepartment = async (req, res) => {
    try {
        const deparmentId = req.params.u_id;
          const {name, code ,description} = req.body;
        const department = await Department.findByPk(deparmentId);

        if(!department)
        {
             return res.status(404).json({message:"Not Found"})
        }

        await Department.update({name, code ,description})
    } catch (error) {
        
    }

}

//delete 

const deleteDepartment = async (req, res) => {
    try {
        const deparmentId = req.params.u_id;

        const department = await Department.findByPk(deparmentId);

        if(!department)
        {
             return res.status(404).json({message:"Not Found"})
        }
         if(academicYear.is_active)
        {
            return res.status(400).json({message:"Cannot delete an active academic year"});
        }

          await Department.update({is_active: false})
    } catch (error) {
        
    }

}