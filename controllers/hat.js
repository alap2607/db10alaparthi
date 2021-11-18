var hat = require('../models/hat');
// List of all hat
exports.hat_list = async function(req, res) {
    try{
        thehat = await hat.find();
        res.send(thehat);
    }
    catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`); 
    }
//res.send('NOT IMPLEMENTED: hat list');
};

// for a specific hat.
exports.hat_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await hat.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

// Handle hat create on POST.
exports.hat_create_post = async function (req, res) {
    console.log(req.body)
    let document = new hat();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"hat_name":"beret hat", "colour":"white", "price":"Thirty-four USD"}
    document.hat_name = req.body.hat_name;
    document.colour = req.body.colour;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle hat delete on DELETE. 
exports.hat_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await hat.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
//Handle bakery update form on PUT.
exports.hat_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await hat.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.hat_name)  toUpdate.hat_name = req.body.hat_name; 
        if(req.body.colour) toUpdate.colour = req.body.colour; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// VIEWS
// Handle a show all view
exports.hat_view_all_Page = async function (req, res) {
    try {
        thehat = await hat.find();
        res.render('hat', { title: 'hat Search Results', results: thehat });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle a show one view with id specified by query 
exports.hat_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await hat.findById( req.query.id) 
        res.render('hatdetail',  
{ title: 'Hat Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a hat. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.hat_create_Page =  function(_req, res) { 
    console.log("create view") 
    try{ 
        res.render('hatcreate', { title: 'Hat Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a hat. 
// query provides the id 
exports.hat_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await hat.findById(req.query.id)
        res.render('hatupdate', { title: 'hat Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    } 
};

// Handle a delete one view with id from query 
exports.hat_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await hat.findById(req.query.id) 
        res.render('hatdelete', { title: 'hat Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 