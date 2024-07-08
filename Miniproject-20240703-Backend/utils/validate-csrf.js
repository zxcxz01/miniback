function validateCSRFToken(req, res, next) {
    if (!req.body._csrf || req.body._csrf !== req.cookies['XSRF-TOKEN']) {
        return res.status(403).send('CSRF 토큰이 유효하지 않습니다.');
    }
    next();
}

module.exports = { validateCSRFToken };
