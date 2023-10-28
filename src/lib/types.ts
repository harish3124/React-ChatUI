export interface responseType {
  chats: chatType[];
  name: string;
  from: string;
  to: string;
  message: string;
  status: string;
}

export interface chatType {
  id: string;
  message: string;
  time: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
}

export const emptyResp: responseType = {
  from: "",
  to: "",
  status: "",
  name: "",
  message: "",
  chats: [
    {
      message: "",
      id: "",
      time: "",
      sender: {
        self: false,
        image: "",
        user_id: "",
        is_kyc_verified: false,
      },
    },
  ],
};

export const emptyChat: chatType = {
  message: "",
  id: "",
  time: "",
  sender: {
    self: false,
    image: "",
    user_id: "",
    is_kyc_verified: false,
  },
};
