/** @type {import('next').NextConfig} */


// import { NextApiRequest, NextApiResponse } from 'next'



const healthCheckerHandler = (req, res) => {
  res.status(200).json({ status: 'OK' })
}


const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: '/client3',
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/client3',
      }
    ];
  },
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}


// export { healthCheckerHandler};
module.exports = nextConfig
