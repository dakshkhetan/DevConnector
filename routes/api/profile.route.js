const express = require('express');
const router = express.Router();

const auth = require('../../middleware/auth');
const {
  validProfile,
  validExperience,
  validEducation
} = require('../../middleware/valid');

const {
  getCurrentUserProfile,
  createOrUpdateUserProfile,
  getAllProfiles,
  getProfileById,
  deleteAccount,
  addProfileExperience,
  addProfileEducation,
  deleteExperience,
  deleteEducation,
  getUserGithubRepos
} = require('../../controllers/profile.controller');

router.get('/me', auth, getCurrentUserProfile);
router.post('/', auth, validProfile, createOrUpdateUserProfile);
router.get('/', getAllProfiles);
router.get('/user/:user_id', getProfileById);
router.delete('/', auth, deleteAccount);
router.put('/experience', auth, validExperience, addProfileExperience);
router.put('/education', auth, validEducation, addProfileEducation);
router.delete('/experience/:exp_id', auth, deleteExperience);
router.delete('/education/:edu_id', auth, deleteEducation);
router.get('/github/:username', getUserGithubRepos);

module.exports = router;
