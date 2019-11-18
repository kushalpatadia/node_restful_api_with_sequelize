const express = require('express');
const router = express.Router();

const contactus = require('../../models/contactus');
const contactusModel = contactus(sequelize, Sequelize);

router.get('/', (req, res, next) => {
	console.log('asasasa');
	contactusModel
		.findAll()
		.then((result) => {
			res.status(200).json({
				message: 'Data retrived successfully',
				contactUsList: result
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err
			});
		});
});

router.post('/', (req, res, next) => {
	console.log('asasasa');
	contactusModel
		.create(req.body)
		.then((result) => {
			res.status(200).json({
				message: 'Data submited successfully',
				contactData: result
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: err
			});
		});
});

module.exports = router;
