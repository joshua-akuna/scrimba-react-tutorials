import { useState } from 'react';

export default function Messages() {
  const [unreadMessages, setUnreadMessages] = useState(['a', 'b']);

  let prompt =
    unreadMessages.length == 0
      ? 'You are all caught up!'
      : unreadMessages.length == 1
      ? `You have ${unreadMessages.length} unread message`
      : `You have ${unreadMessages.length} unread messages`;

  return (
    <div>
      {/* {unreadMessages.length > 0 && (
        <h1>You have {unreadMessages.length} unread messages!</h1>
      )}
      {unreadMessages.length === 0 && <p>You have no unread messages</p>} */}
      <h1>{prompt}</h1>
    </div>
  );
}
