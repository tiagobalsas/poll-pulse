type MessageType = { pollOptionId: string; votes: number };
type SubscriberType = (message: MessageType) => void;

class VotingPubSub {
  private channels: Record<string, SubscriberType[]> = {};

  subscribe(pollId: string, subscribe: SubscriberType) {
    if (!this.channels[pollId]) {
      this.channels[pollId] = [];
    }

    this.channels[pollId].push(subscribe);
  }

  publish(pollId: string, message: MessageType) {
    if (!this.channels[pollId]) {
      return;
    }

    for (const subscribe of this.channels[pollId]) {
      subscribe(message);
    }
  }
}

export const voting = new VotingPubSub();
