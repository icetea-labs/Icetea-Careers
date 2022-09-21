function checkValidExtention(fileName) {
  const valideExts = ['.jpg', '.jpeg', '.png', '.pdf', '.ppt', '.doc', '.docx']

  return (new RegExp('(' + valideExts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
}

module.exports = { checkValidExtention }
