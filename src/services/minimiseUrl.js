export default function minimiseUrl(siteUrl, setSiteUrl) {
  const removeWWW = url => url.replace('www.', '')
  const removeHTTPS = url => url.slice(8)
  const newPromise = new Promise(resolve => {
    resolve(removeHTTPS(siteUrl))
  })
  if (siteUrl.includes('https://')) {
    newPromise.then(res => {
      if (res.includes('www.')) {
        setSiteUrl(removeWWW(res))
        return
      }
      setSiteUrl(res)
    })
    return
  } else if (siteUrl.includes('www.')) {
    setSiteUrl(removeWWW(siteUrl))
    return
  }
}
