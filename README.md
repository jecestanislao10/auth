# jec-auth
Wrapper library for passport-jwt. Supports express and sequelize.

## Install
```
npm install --save jec-auth
```

## Example Usage

```
const {initialize, authenticate} = require('jec-auth')
const { Router } = require('express');
const userModel = require('./*')
const restrictedControllers = require('./*')

const router = Router();

router.use(configutre(process.env.ACCESS_KEY, findById));

router.use(initialize());

router.use(authenticate(), restrictedControllers);

module.exports = router;

```
