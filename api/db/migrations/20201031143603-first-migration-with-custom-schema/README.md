# Migration `20201031143603-first-migration-with-custom-schema`

This migration has been generated by Davy Hausser at 10/31/2020, 3:36:03 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
)

CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201031143603-first-migration-with-custom-schema
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,30 @@
+datasource DS {
+  provider = ["sqlite", "postgresql"]
+  url = "***"
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = ["native", "rhel-openssl-1.0.x"]
+}
+
+model Post {
+  id Int @id @default(autoincrement())
+  title String
+  body String
+  createdAt DateTime @default(now())
+}
+
+model User {
+  id Int @id @default(autoincrement())
+  name String
+  email String
+}
+
+model Contact {
+  id Int @id @default(autoincrement())
+  name String
+  email String
+  message String
+  createdAt DateTime @default(now())
+}
```


