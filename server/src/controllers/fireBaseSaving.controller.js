/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
// const { getStorage, getDownloadURL } = require('firebase-admin/storage');

const serviceAccount = require('../serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'gs://community-connect-1c332.appspot.com',
});

const storage = getStorage();
const bucket = storage.bucket();

const uploadFile = async (req, res) => {
  try {
    const { file } = req;
    if (file) {
      const firebaseFile = await bucket.upload(file.path, {
        destination: `uploads/${file.originalname}`,
      });

      const fileUrl = await firebaseFile[0].getSignedUrl({
        action: 'read',
        expires: '03-09-2050', // an expiration date
      });

      // TODO: Save the file URL in DB

      res.status(200).json({ message: 'File uploaded successfully!', fileUrl });
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'An error occurred while uploading the file.' });
  }
};

module.exports = uploadFile;
