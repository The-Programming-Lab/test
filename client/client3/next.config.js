/** @type {import('next').NextConfig} */


// import { NextApiRequest, NextApiResponse } from 'next'



const healthCheckerHandler = (req, res) => {
  res.status(200).json({ status: 'OK' })
}


const nextConfig = {
  experimental: {
    appDir: true,
  },
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}


// export { healthCheckerHandler};
module.exports = nextConfig
