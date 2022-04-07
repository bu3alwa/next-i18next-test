/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['s.gravatar.com', 'gravatar.com', 'googleusercontent.com', 's3.amazonaws.com', 'clr-static-artifacts-us.s3.amazonaws.com'],
  }
}

module.exports = nextConfig
