const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
  res.json([
    {
      Accessory: "Aretes",
      Price: 30000,
      Material: "Oro"
    },
    {
      Accessory: "Bolso",
      Price: 34000,
      Material: "Cuero"
    },
    {
      Accessory: "Pulsera",
      Price: 20000,
      Material: "Cobre"
    },
    {
      Accessory: "Collar",
      Price: 33000,
      Material: "Oro"
    },
    {
      Accessory: "Reloj",
      Price: 40000,
      Material: "Plata"
    }

  ]
  )
})

module.exports = router
