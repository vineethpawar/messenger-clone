import PubNub from "pubnub";

const pubnub = new PubNub({
  publishKey: process.env.PUBNUB_PUBLISH_KEY!,
  subscribeKey: process.env.PUBNUB_SUBSCRIBE_KEY!,
  userId: "user5",
});

export default pubnub;
