type MessageType = { pollOptionId: string; votes: number };
type SubscriberType = (message: MessageType) => void;

class VotingPubSub {
  private channels: Record<string, SubscriberType[]> = {};

  subscribe(pollId: string, subscriber: SubscriberType) {
    if (!this.channels[pollId]) {
      this.channels[pollId] = [];
    }

    this.channels[pollId].push(subscriber);
  }

  publish(pollId: string, message: MessageType) {
    if (!this.channels[pollId]) {
      return;
    }

    for (const subscriber of this.channels[pollId]) {
      subscriber(message);
    }
  }
}

export const voting = new VotingPubSub();
