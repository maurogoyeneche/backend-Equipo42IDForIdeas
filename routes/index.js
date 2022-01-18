const publicRoutes = require('./publicRoutes');
const adminRoutes = require('./adminRoutes');

module.exports = (app) => {
  app.use('/user', publicRoutes);
  app.use('/admin', adminRoutes);
};
