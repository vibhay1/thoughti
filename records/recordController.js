const records=require('./data.json');

module.exports = {
    getRecords:async(req,res)=>{
        const page = req.query.page && req.query.page>0?Number(req.query.page): 1;
        const count = Number(req.query.count) || 10;
        const skip = (page - 1) * count;
        const data=records;
        const total=data.length;
        const response=data.slice(skip,skip+count);
        
        return res.status(200).json({
          message:'success',
          Ids:response.map(item=>item.id),
          Open:response.filter(item=>item.disposition==="open"),
          ClosedCount:response.reduce((prev,a)=>{
            if(a.disposition==="closed" &&  ["red","blue","green"].includes(a.color)){
              return  ++prev;
            }else
            return prev
          },0),
          PreviousPage:page>1?page-1:null,
          NextPage:page < Math.ceil(total / count)?page+1:null
        });
    }
};