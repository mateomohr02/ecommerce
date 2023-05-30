const User = require('../../models/User');

const adminValidation = async (req, res, next) => {
  try {
    // Verificar la identidad del usuario autenticado y su rol de administrador
    const userId = req.user.id; // Suponiendo que tienes el usuario autenticado en req.user
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(401).json({ error: 'Usuario no autenticado' });
    }
    
    if (!user.isAdmin) {
      return res.status(403).json({ error: 'Acceso denegado. Requiere permisos de administrador' });
    }

    // El usuario es administrador, permitir el acceso
    next();
  } catch (error) {
    res.status(500).json({ error: 'Error de autenticación' });
  }
};

module.exports = adminValidation;