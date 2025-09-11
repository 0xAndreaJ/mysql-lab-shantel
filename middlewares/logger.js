
export function logger(req, res, next) {
    const timestamp = new Date().toLocaleDateString()
  console.log(`[${timestamp}] - ${req.method} ${req.url}`);

  res.on('finish', () => {
    if (res.statusCode >= 400) {
        console.log(`ERROR: ${res.statusCode} - Something went wrong`)
    }else {
        console.log(`SUCCESS: - Request completed.`)
    }
  })

  next();
}
export default logger;
