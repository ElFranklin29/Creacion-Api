const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
  res.json(
    [
      {
        name: "Joyeria"
      },
      {
        name: "Maquillaje"
      },
      {
        name: "Relojeria"
      },
      {
        name: "Maletas/Morrales"
      },
      {
        name: "Vestuario"
      }
    ]
  )
})


module.exports = router
