interface Page {
  title: string;
  likes: number;
  account: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
}
