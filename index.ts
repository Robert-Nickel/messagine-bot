import {
  MessengerContext,
  TelegramContext,
} from 'bottender';

export default async function App(
  context:
    | MessengerContext
    | TelegramContext
): Promise<void> {
  if (context.event.isText) {
    await context.sendText(context.event.text);
  } else {
    await context.sendText('Not text input');
  }
}