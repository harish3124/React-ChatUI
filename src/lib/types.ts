export interface responseType {
  chat: chatType[];
  name: string;
  from: string;
  to: string;
  message: string;
  status: string;
}

interface chatType {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
    time: string;
  };
}
