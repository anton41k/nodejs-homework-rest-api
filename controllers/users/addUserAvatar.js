const fs = require('fs/promises')
const path = require('path')
const imageResize = require('../../utils/imageResize')

const { User } = require('../../models')

const avatarsDir = path.join(
  __dirname,
  '../../',
  'public/avatars'
)

async function addUserAvatar(req, res) {
  const { path: tempPath, originalname } = req.file
  const { _id: id } = req.user
  const uniqueNameImage = `${id}_${originalname}`
  const uploadPath = path.join(avatarsDir, uniqueNameImage)
  const avatarUrl = path.join('/avatars', uniqueNameImage)
  console.log(avatarUrl, uploadPath)
  try {
    await imageResize(tempPath, 250, 250)
    await fs.rename(tempPath, uploadPath)
    await User.findByIdAndUpdate(id, { avatarUrl }, { new: true })
    res.json({
      status: 'success',
      code: 200,
      data: {
        user: {
          avatarUrl
        }
      }
    })
  } catch (error) {
    await fs.unlink(tempPath)
    throw error
  }
}

module.exports = addUserAvatar
