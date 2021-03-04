module.exports = async function App(context) {
  if (context.event.isText) {
    await context.sendText(context.event.text);
  } else {
    await context.sendText('Not text input');
  }
};
