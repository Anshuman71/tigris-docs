---
id: read
title: Read
slug: /sdkstools/cli/read
---

Reads and outputs documents

### Synopsis

Reads documents according to provided filter and fields.
If filter is not provided or an empty json document {} is passed as a filter,
all documents in the collection are returned.

If fields are not provided or an empty json document {} is passed as fields,
all the fields of the documents are selected.

```
tigris read {collection} {filter} {fields} [flags]
```

### Examples

```

  # Read a user document where id is 20
  # The output would be
  #  {"id": 20, "name": "Jania McGrory"}
  tigris read --project=myproj users '{"id": 20}'

  # Read user documents where id is 2 or 4
  # The output would be
  #  {"id": 2, "name": "Alice Wong"}
  #  {"id": 4, "name": "Jigar Joshi"}
  tigris read --project=myproj users '{"$or": [{"id": 2}, {"id": 4}]}'

  # Read all documents in the user collection
  # The output would be
  #  {"id": 2, "name": "Alice Wong"}
  #  {"id": 4, "name": "Jigar Joshi"}
  #  {"id": 20, "name": "Jania McGrory"}
  #  {"id": 21, "name": "Bunny Instone"}
  tigris read --project=myproj users

```

### Options

```
      --branch string    Specifies branch: --branch=my_br1
  -h, --help             help for read
  -l, --limit int        limit number of returned results
  -p, --project string   Specifies project: --project=my_proj1
  -s, --skip int         skip this many results in the beginning of the result set
```

### SEE ALSO

- [tigris](tigris.md) - tigris is a command line interface of Tigris data platform
