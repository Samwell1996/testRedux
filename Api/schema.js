import { schema } from 'normalizr';

export const User = new schema.Entity('users');
export const Product = new schema.Entity('products', { owner: User });

export const ProductList = [Product];

export const Message = new schema.Entity('messages');
export const Chat = new schema.Entity('chats', { message: Message });

export const ChatList = [Chat];

export const MessageList = [Message];
// export const Product = new schema.Entity('products', {
//   owner: User,
// });
// export const LatestProduct = new schema.Entity('products');
// export const LatestProductCollection = [LatestProduct];
// export const OwnProduct = [LatestProduct];
// export const MessageSchema = new schema.Entity('messages');
// export const ProductCollection = [Product];

// export const ChatSchema = new schema.Entity('chats', {
//   message: MessageSchema,
//   product: Product,
//   participants: [User],
// });
// export const ChatCollectionSchema = [ChatSchema];
// export const MessageCollectionSchema = [MessageSchema];
