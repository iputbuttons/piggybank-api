module.exports = (req, res, next) => {
  const featureFlags = {
    homeActions: true,
    singleBalance: true,
  }

  res.header('x-Feature-Flags', JSON.stringify(featureFlags))

  next()
}
