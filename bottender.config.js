module.exports = {
  channels: {
    messenger: {
      enabled: true,
      sync: true,
      path: '/webhooks/messenger',
      pageId: '${{ secrets.MESSENGER_PAGE_ID }}',
      accessToken: '${{ secrets.MESSENGER_ACCESS_TOKEN }}',
      appId: '${{ secrets.MESSENGER_APP_ID }}',
      appSecret: '${{ secrets.MESSENGER_APP_SECRET }}',
      verifyToken: '${{ secrets.MESSENGER_VERIFY_TOKEN }}',
    },
    line: {
      enabled: false,
      path: '/webhooks/line',
      accessToken: process.env.LINE_ACCESS_TOKEN,
      channelSecret: process.env.LINE_CHANNEL_SECRET,
    },
    telegram: {
      enabled: false,
      path: '/webhooks/telegram',
      accessToken: process.env.TELEGRAM_ACCESS_TOKEN,
    },
    slack: {
      enabled: false,
      path: '/webhooks/slack',
      accessToken: process.env.SLACK_ACCESS_TOKEN,
      verificationToken: process.env.SLACK_VERIFICATION_TOKEN,
    },
    viber: {
      enabled: false,
      path: '/webhooks/viber',
      accessToken: process.env.VIBER_ACCESS_TOKEN,
      sender: {
        name: 'xxxx',
      },
    },
  },
};
