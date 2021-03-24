const router = require("express").Router();
const Champ = require('../models/Championship');

router.put('/api/addAdmin/:adminID/xxxxxxxxxxxxxxxxxxxxxxxx', async (req, res) => {
    const adminID = req.params.adminID;

    console.log('admin:', adminID);

    const updated = await Champ.findOneAndUpdate({ champName: "xxxxxxxxxxxxxxxxxxxxxxxx" }, { $push: { admin: adminID } }, { new: true });

    console.log(updated);

    res.send(updated);

})

router.get('/api/champs/:champName', async (req, res) => {
    const foundChamps = await Champ.find({champName: {$regex: req.params.champName}})
    res.send(foundChamps);
    
})

router.post('/api/createChamp', async (req, res) => {
    const champ = req.body;
    console.log(champ);
    const newChamp = await Champ.create(champ);
    console.log(newChamp);
    res.send(newChamp);
});


router.put('/api/updateChampName', async (req, res) => {
    let name = req.body;
    name = name.name;
    const updated = await Champ.findOneAndUpdate({ champName: 'xxxxxxxxxxxxxxxxxxxxxxxx' }, { $set: { champName: name } }, { new: true });
    res.send(updated);
})


router.get('/api/allChamp', async (req, res) => {
    const allChamp = await Champ.find({});
    res.send(allChamp);
})

router.get('/api/tmpChamp', async (req, res) => {
    console.log('hit tmpChamp');
    const tmpChamp = await Champ.findOne({ champName: 'xxxxxxxxxxxxxxxxxxxxxxxx' });
    res.send(tmpChamp);
})

router.get('/api/champ/:champID', async (req, res) => {
    const foundChamp = await Champ.findOne({ _id: req.params.champID }).populate('players');
    res.send(foundChamp);

})

router.put('/api/generateDemoChamp', async (req, res) => {

});

module.exports = router;
