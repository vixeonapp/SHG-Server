<p align="center">
  <a href="https://vixeonapp.com" target="blank"><img src="https://vixeonapp.com/favicon.ico" width="120" alt="SHGS Logo" /></a>
</p>

<p align="center">
  A fast, secure, and fully self-hosted guild server powering the next generation of Vixeon communities.
</p>

---

## 📌 Description

**Vixeon SHGS (Self-Hosted Guild Server)** is the backend service that powers **guilds** in the Vixeon ecosystem.  
It is designed for **speed**, **security**, and **modularity**, allowing you to self-host your own guild infrastructure without relying on centralized servers.

- 🔒 **Secure by design** — Token-bound guild access and payload protection.
- ✨ **Absolutely free customization** — Instances hold ownership of guild's metadata.
- 🛳️ **No file upload limits** — No more paywalls that restrict sharing of content.

---

## 🚀 Project Setup

```bash
# Install dependencies
$ pnpm install
````

---

## 🖥 Running the Server

```bash
# Production
$ pnpm run start
```

---

## 🛠 Environment Variables

| Variable       | Description                             | Default       |
| -------------- | --------------------------------------- | ------------- |
| `VIXEON_JWKS_URL` | JWKS to check tokens on.             | **`https://vixeonapp.com/.well-known/jwks.json` Required**  |
| `DB_HOST`         | Host of SHGS database                | **Required**        |
| `DB_USER`         | User of SHGS database                | **Required**        |
| `DB_PASSWORD`         | Password of SHGS user in database                | **Required**        |
| `DB_DATABASE`         | Name of SHGS database                | **Required**        |
| `DB_SSL`         | Whatever to use SSL in Database connection (`TRUE` / `FALSE`)                | **Required**        |
| `NODE_ENV`     | Environment mode (`development`/`production`) | `development` |

---

## 📚 Resources

* [Vixeon's Community Guild](https://vixeonapp.com/)

---

## 🤝 Support

SHGS is an open-source component of the Vixeon project.
If you’d like to contribute, check out the [contribution guidelines](CONTRIBUTING.md) (SOON) or consider sponsoring development.

---

## 👤 Authors

* [TheLite](https://github.com/thelite0) — Core Developer
* [Vixeon Team](https://vixeonapp.com)

---

## 📜 License

SHGS is [licensed](LICENSE).
