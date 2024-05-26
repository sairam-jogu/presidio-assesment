const nodemailer = require('nodemailer');
const HouseModel = require('../Models/HouseModel');
const UserModel = require('../Models/UserModel');

require('dotenv').config();

const handleInterest = async (req, res) => {
  const { buyerDetails, houseId } = req.body;

  try {

    const house = await HouseModel.findById(houseId).populate('user');
    if (!house) {
      return res.status(404).send('House not found');
    }

    const seller = await UserModel.findById(house.user._id);
    if (!seller) {
      return res.status(404).send('Seller not found');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: buyerDetails.email,
      to: seller.email,
      subject: 'Interest in Your Property',
      text: `
        Buyer's Details:
        Name: ${buyerDetails.name}
        Email: ${buyerDetails.email}
        Phone: ${buyerDetails.phone}

        House Details:
        Address: ${house.address}
        Price: ${house.price}
        Description: ${house.description}
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).send('Interest expressed successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error expressing interest');
  }
};

module.exports = handleInterest;
