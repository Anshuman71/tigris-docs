# Transactions

Transactions allow multiple clients to concurrently read and write data in the
database with ACID guarantees. By virtue of using
[FoundationDB](https://apple.github.io/foundationdb/transaction-processing.html)
under the hood Tigris employs ACID transactions implicitly for all operations.

Following are some of the properties of transactions in Tigris:

- All operations are always atomic, durable and leave the database in a
  consistent state
- Transactions are executed using optimistic concurrency control which ensures
  that documents don't need to be locked when updating
- Transactions are globally ordered and provide strict serializability guarantee

:::info Distributed ACID Transactions

Transactions in Tigris work across collections and documents without any
restrictions or performance penalty.

:::

## How to use transactions

Transactions in Tigris can be executed in an interactive manner. You can begin a
transaction and perform multiple operations inside this transaction's context.
Commit provides all or nothing semantics by ensuring that there are no partial
updates in the database if a transaction fails.

```ts
await db.transact(async (tx) => {
  // read user 1
  const user1 = await users.findOne(
    {
      filter: { userId: 1 },
    },
    tx
  );

  // read user 2
  const user2 = await users.findOne(
    {
      filter: { userId: 2 },
    },
    tx
  );

  if (user1 === undefined || users2 === undefined) {
    throw new Error("User(s) not found"); // This will auto-rollback transaction
  }

  // deduct balance from user1
  let result = await users.updateOne(
    {
      filter: { userId: user1.userId },
      fields: { balance: user1.balance - 100 },
    },
    tx
  );

  if (!result?.modifiedCount) {
    throw new Error(`Failed to update user's balance: ${result}`); // This will auto-rollback transaction
  }

  // add balance to user2
  result = await users.updateOne(
    {
      filter: { userId: user2.userId },
      fields: { balance: user2.balance + 100 },
    },
    tx
  );

  if (!result?.modifiedCount) {
    throw new Error(`Failed to update user's balance: ${result}`); // This will auto-rollback transaction
  }
});
```

See the language-specific sections for more examples of Transactions:

- [Transactions in TypeScript](../../sdkstools/typescript/database/transactions.md)
- [Transactions in Go](../../sdkstools/golang/database/transactions.md)
- [Transactions in Java](../../sdkstools/java/database/transactions.mdx)

Learn more about the
[internals of transactions in Tigris](https://www.tigrisdata.com/blog/transaction-internals-tigris/)
and how they compare to MongoDB transactions.
