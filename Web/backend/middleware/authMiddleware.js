const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ message: 'No token provided' });

  jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Failed to authenticate token' });

    // If token is valid, save the decoded information to the request
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next(); // Continue to the next middleware or the route handler
  });
};

module.exports = verifyToken;
